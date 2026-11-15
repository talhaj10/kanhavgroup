"use client";

import React, { useEffect, useState, startTransition, type CSSProperties } from "react";

export interface LogoPreloaderProps {
  logo?: {
    src: string;
    alt?: string;
  };
  backgroundColor?: string;
  duration?: number;
  logoWidth?: number;
  style?: CSSProperties;
  onComplete?: () => void;
}

/**
 * LogoPreloader
 * Adapted from Framer LogoPreloader (LQx6)
 * Pre-loader with centered brand logo, animates logo up and in, holds,
 * then animates logo up and out, and fades background.
 */
export default function LogoPreloader({
  logo = {
    src: "/assets/images/kanhav-group-logo.webp",
    alt: "Kanhav Group Logo",
  },
  backgroundColor = "#110f0e",
  duration = 1.6,
  logoWidth = 320,
  style,
  onComplete,
}: LogoPreloaderProps) {
  // Phases: "init" -> "loading" (enter from bottom) -> "logoOut" (exit to top) -> "done" (unmounted)
  const [phase, setPhase] = useState<"init" | "loading" | "logoOut" | "done">("init");

  useEffect(() => {
    // Lock scroll during preloading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Animate logo in from bottom
    const t0 = setTimeout(() => {
      startTransition(() => setPhase("loading"));
    }, 50);

    // 2. Animate logo up and out
    const t1 = setTimeout(() => {
      startTransition(() => setPhase("logoOut"));
    }, duration * 1000 + 50);

    // 3. Fade background out and finalize
    const t2 = setTimeout(() => {
      startTransition(() => {
        setPhase("done");
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      });
    }, duration * 1000 + 750);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = originalOverflow;
    };
  }, [duration, onComplete]);

  if (phase === "done") return null;

  // Animation states exactly matching Framer specification
  let logoTranslateY = 0;
  let logoOpacity = 1;

  if (phase === "init") {
    logoTranslateY = 80;
    logoOpacity = 0;
  } else if (phase === "loading") {
    logoTranslateY = 0;
    logoOpacity = 1;
  } else if (phase === "logoOut") {
    logoTranslateY = -80;
    logoOpacity = 0;
  }

  const bgOpacity = phase === "logoOut" ? 0 : 1;
  const transition = "all 0.7s cubic-bezier(.7,.2,.2,1)";

  return (
    <div
      style={{
        ...style,
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.7s cubic-bezier(.7,.2,.2,1)",
        opacity: bgOpacity,
        pointerEvents: phase === "logoOut" ? "none" : "all",
        zIndex: 99999,
        overflow: "hidden",
      }}
      aria-label="Loading Kanhav Group"
      role="status"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition,
          transform: `translateY(${logoTranslateY}px)`,
          opacity: logoOpacity,
          willChange: "transform, opacity",
          userSelect: "none",
          zIndex: 1,
          padding: "20px",
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt || "Kanhav Group Logo"}
          style={{
            width: "100%",
            maxWidth: `${logoWidth}px`,
            height: "auto",
            maxHeight: "140px",
            objectFit: "contain",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
