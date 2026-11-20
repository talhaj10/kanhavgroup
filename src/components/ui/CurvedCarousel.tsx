"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";

export interface CurvedCarouselItem {
  id: string;
  title: string;
  sector: string;
  image: string;
  specs?: string;
}

export interface CurvedCarouselProps {
  items: CurvedCarouselItem[];
  curve?: number; // 0 to 1.0 (default: 0.42)
  speed?: number; // px per second for autoplay (default: 34)
  direction?: "Left" | "Right";
  autoplay?: boolean;
  onItemClick?: (item: CurvedCarouselItem) => void;
  className?: string;
}

/**
 * CurvedCarousel
 * Framer-inspired cylindrical curved 3D carousel with continuous physics-based
 * momentum dragging, concave arc projection, and responsive touch gestures.
 */
export const CurvedCarousel: React.FC<CurvedCarouselProps> = ({
  items,
  curve = 0.42,
  speed = 34,
  direction = "Left",
  autoplay = true,
  onItemClick,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 540 });
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isDragging, setIsDragging] = useState(false);
  const [, setRenderTrigger] = useState(0);

  // Responsive card dimensions
  const isMobile = containerSize.width < 640;
  const isTablet = containerSize.width >= 640 && containerSize.width < 1024;
  const cardWidth = isMobile ? 220 : isTablet ? 250 : 280;
  const cardHeight = isMobile ? 320 : isTablet ? 360 : 400;
  const gap = isMobile ? 20 : isTablet ? 26 : 32;
  const pitch = cardWidth + gap;
  const total = items.length * pitch;

  // Animation motion state in ref to avoid react state re-renders during 60fps tick
  const motionRef = useRef({
    offset: 0,
    velocity: direction === "Left" ? speed : -speed,
    pointerId: -1,
    startX: 0,
    lastX: 0,
    lastTime: 0,
    resumeTime: 0,
    isHovered: false,
    dragDistance: 0,
  });

  // Track container dimensions with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.clientWidth || 1200;
      const height = el.clientHeight || 540;
      setContainerSize((prev) =>
        prev.width === width && prev.height === height ? prev : { width, height }
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Main 60fps Animation Loop with Physics Momentum
  useEffect(() => {
    let animId: number;
    let lastTimestamp = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.04, (now - lastTimestamp) / 1000);
      lastTimestamp = now;
      const m = motionRef.current;

      // Handle pointer dragging vs momentum coasting
      if (m.pointerId < 0) {
        const canAutoplay = isPlaying && !m.isHovered && now > m.resumeTime;
        const targetVelocity = canAutoplay ? (direction === "Left" ? speed : -speed) : 0;
        const momentumFactor = 0.92;

        m.velocity += (targetVelocity - m.velocity) * (1 - Math.pow(momentumFactor, dt * 60));

        if (Math.abs(m.velocity) > 0.05) {
          m.offset = (m.offset + m.velocity * dt) % total;
          if (m.offset < 0) m.offset += total;
          setRenderTrigger((v) => (v + 1) % 100000);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [direction, isPlaying, speed, total]);

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const m = motionRef.current;
    m.pointerId = e.pointerId;
    m.startX = e.clientX;
    m.lastX = e.clientX;
    m.lastTime = performance.now();
    m.velocity = 0;
    m.dragDistance = 0;
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const m = motionRef.current;
    if (m.pointerId !== e.pointerId) return;

    const now = performance.now();
    const dt = Math.max(0.008, (now - m.lastTime) / 1000);
    const dx = e.clientX - m.lastX;

    m.dragDistance += Math.abs(dx);
    m.offset = (m.offset - dx) % total;
    if (m.offset < 0) m.offset += total;

    // Smooth instantaneous drag velocity estimation
    const instantVelocity = -dx / dt;
    m.velocity = 0.35 * m.velocity + 0.65 * Math.max(-1800, Math.min(1800, instantVelocity));

    m.lastX = e.clientX;
    m.lastTime = now;
    setRenderTrigger((v) => (v + 1) % 100000);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const m = motionRef.current;
    if (m.pointerId !== e.pointerId) return;

    const now = performance.now();
    if (now - m.lastTime > 120) {
      m.velocity = 0;
    }
    m.pointerId = -1;
    m.resumeTime = now + 1400; // Pause briefly after touch release before resuming autoplay
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore fallback
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const m = motionRef.current;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      m.offset = (m.offset - pitch) % total;
      if (m.offset < 0) m.offset += total;
      m.velocity = 0;
      m.resumeTime = performance.now() + 2000;
      setRenderTrigger((v) => (v + 1) % 100000);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      m.offset = (m.offset + pitch) % total;
      if (m.offset < 0) m.offset += total;
      m.velocity = 0;
      m.resumeTime = performance.now() + 2000;
      setRenderTrigger((v) => (v + 1) % 100000);
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((p) => !p);
    }
  };

  const stepNext = useCallback(() => {
    const m = motionRef.current;
    m.offset = (m.offset + pitch * 1.1) % total;
    if (m.offset < 0) m.offset += total;
    m.velocity = direction === "Left" ? speed : -speed;
    m.resumeTime = performance.now() + 2000;
    setRenderTrigger((v) => (v + 1) % 100000);
  }, [direction, pitch, speed, total]);

  const stepPrev = useCallback(() => {
    const m = motionRef.current;
    m.offset = (m.offset - pitch * 1.1) % total;
    if (m.offset < 0) m.offset += total;
    m.velocity = direction === "Left" ? -speed : speed;
    m.resumeTime = performance.now() + 2000;
    setRenderTrigger((v) => (v + 1) % 100000);
  }, [direction, pitch, speed, total]);

  // Curved Cylinder Math Parameters
  const half = Math.max(280, containerSize.width / 2);
  const perspective = Math.max(900, containerSize.width * 1.15);
  const lift = Math.min(curve * 105, Math.max(0, (containerSize.height - cardHeight) / 2 + 12));

  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Top Controls Strip: Stepper & Play/Pause */}
      <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] text-kraft-headline font-mono text-[11px] uppercase tracking-wider font-semibold shadow-xs hover:border-kraft-orange/50 transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-kraft-orange fill-kraft-orange" />
                <span className="hidden sm:inline">Autoplay Active</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-kraft-olive fill-kraft-olive" />
                <span className="hidden sm:inline">Paused</span>
              </>
            )}
          </button>
          <span className="text-[11px] font-mono text-kraft-olive/70 hidden sm:inline">
            Drag left/right or use arrow keys
          </span>
        </div>

        {/* Next / Prev Stepper */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={stepPrev}
            className="w-9 h-9 rounded-full bg-white border border-black/[0.08] shadow-xs flex items-center justify-center text-kraft-headline hover:border-kraft-orange hover:text-kraft-orange transition-colors cursor-pointer"
            aria-label="Previous application sector"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={stepNext}
            className="w-9 h-9 rounded-full bg-white border border-black/[0.08] shadow-xs flex items-center justify-center text-kraft-headline hover:border-kraft-orange hover:text-kraft-orange transition-colors cursor-pointer"
            aria-label="Next application sector"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Curved Projection Viewport */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Curved Glassfibre Applications Carousel"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          motionRef.current.isHovered = true;
        }}
        onMouseLeave={() => {
          motionRef.current.isHovered = false;
        }}
        style={{
          touchAction: "pan-y",
          cursor: isDragging ? "grabbing" : "grab",
          height: `${cardHeight + (isMobile ? 80 : 120)}px`,
        }}
        className="relative w-full overflow-hidden flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-kraft-orange/40"
      >
        {/* Left & Right Peripheral Edge Soft Scrim Gradients */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8f7f4] via-[#f8f7f4]/60 to-transparent pointer-events-none z-30" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8f7f4] via-[#f8f7f4]/60 to-transparent pointer-events-none z-30" />

        {/* Curved Cards Render Track */}
        <div className="relative w-full h-full pointer-events-none">
          {items.map((item, idx) => {
            const rawX = idx * pitch - motionRef.current.offset;
            // Canonical modular coordinate centered around 0
            const x = (((rawX % total) + total + total / 2) % total) - total / 2;

            // Cull cards far off-screen for 60fps performance
            if (Math.abs(x) > half + pitch * 1.3) {
              return null;
            }

            const normal = x / half;
            // 1. Perspective depth: scales down smoothly away from the front center
            const scale = perspective / (perspective + curve * 240 * normal * normal);
            // 2. Parabolic smile curve: center dips forward/down, edges curve gently upward
            const y = -lift * normal * normal;
            // 3. Cylinder tangent rotation: cards angle inward matching the arc
            const rotateZ = normal * curve * 13;
            // 4. Stacking order: center is in front, sides tuck behind
            const zIndex = Math.round((1 - Math.min(1, Math.abs(normal))) * 100);
            // 5. Edge transparency fade
            const opacity = Math.max(0, 1 - Math.pow(Math.abs(normal) / 1.4, 3));

            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0px) scale(${scale}) rotate(${rotateZ}deg)`,
                  transformOrigin: "center center",
                  zIndex,
                  opacity,
                  willChange: "transform, opacity",
                  pointerEvents: "auto",
                }}
                onClick={() => {
                  if (motionRef.current.dragDistance < 6) {
                    onItemClick?.(item);
                  }
                }}
                className="group rounded-2xl overflow-hidden bg-[#14120f] border border-black/15 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_28px_55px_-10px_rgba(201,63,11,0.25)] flex flex-col justify-between cursor-pointer"
              >
                {/* Background Full-Bleed Photography */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 240px, 300px"
                    className="object-cover object-center filter brightness-80 group-hover:brightness-95 group-hover:scale-108 transition-all duration-700 ease-out"
                    draggable={false}
                  />
                  {/* High-Contrast Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
                </div>

                {/* Top Sector Badge Bar */}
                <div className="relative z-10 p-4 sm:p-5 flex items-start justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-kraft-orange animate-pulse" />
                    <span>{item.sector}</span>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5 text-kraft-orange" />
                  </span>
                </div>

                {/* Bottom Title & Specs Card Strip */}
                <div className="relative z-10 p-4 sm:p-5 space-y-1.5">
                  <div className="flex items-center justify-between text-white/50 font-mono text-[10px] uppercase tracking-wider">
                    <span>Sector // {String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-kraft-orange font-semibold">In-Stock Readiness</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-kraft-orange transition-colors">
                    {item.title}
                  </h3>

                  {item.specs && (
                    <p className="text-[11px] sm:text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {item.specs}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedCarousel;
