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
 * Premium Swiss Industrial Preloader for Kanhav Group.
 * Features:
 * - Immediate visual branding (no blank black screen during hydration)
 * - Pure CSS fail-safe auto-dismissal (guarantees page access even if client JS delays)
 * - Industrial micro-progress indicator with Kanhav orange accent
 * - Smooth cubic-bezier upward exit transition
 * - Zero residual scroll locks
 */
export default function LogoPreloader({
  logo = {
    src: "/assets/images/kanhav-group-logo.webp",
    alt: "Kanhav Group - Advanced Composite Materials",
  },
  backgroundColor = "#110f0e",
  duration = 1.4,
  logoWidth = 300,
  style,
  onComplete,
}: LogoPreloaderProps) {
  // Phases: "active" -> "exiting" -> "done"
  const [phase, setPhase] = useState<"active" | "exiting" | "done">("active");

  useEffect(() => {
    // Temporary soft scroll dampening that automatically releases
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Trigger graceful exit animation after duration
    const tExit = setTimeout(() => {
      startTransition(() => {
        setPhase("exiting");
        document.body.style.overflow = originalOverflow;
      });
    }, duration * 1000);

    // 2. Complete unmount and free DOM memory
    const tDone = setTimeout(() => {
      startTransition(() => {
        setPhase("done");
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      });
    }, (duration + 0.6) * 1000);

    return () => {
      clearTimeout(tExit);
      clearTimeout(tDone);
      document.body.style.overflow = originalOverflow;
    };
  }, [duration, onComplete]);

  if (phase === "done") {
    return null;
  }

  const isExiting = phase === "exiting";

  return (
    <>
      <style>{`
        @keyframes kanhavPreloaderFallback {
          0% { opacity: 1; pointer-events: all; }
          80% { opacity: 1; pointer-events: all; }
          98% { opacity: 0; pointer-events: none; }
          100% { opacity: 0; pointer-events: none; visibility: hidden; }
        }
        @keyframes kanhavProgressTrack {
          0% { width: 0%; opacity: 0.6; }
          60% { width: 70%; opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
        @keyframes kanhavLogoIn {
          0% { opacity: 0; transform: translateY(16px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        .kanhav-preloader-curtain {
          animation: kanhavPreloaderFallback 2.2s cubic-bezier(0.7, 0.2, 0.2, 1) forwards;
        }
        .kanhav-preloader-logo {
          animation: kanhavLogoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .kanhav-preloader-bar {
          animation: kanhavProgressTrack 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div
        className="kanhav-preloader-curtain"
        style={{
          ...style,
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.6s cubic-bezier(0.7, 0.2, 0.2, 1), transform 0.6s cubic-bezier(0.7, 0.2, 0.2, 1)",
          opacity: isExiting ? 0 : 1,
          pointerEvents: isExiting ? "none" : "all",
          zIndex: 99999,
          overflow: "hidden",
          touchAction: "none",
        }}
        aria-label="Loading Kanhav Group"
        role="status"
      >
        <div
          className={!isExiting ? "kanhav-preloader-logo" : ""}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s cubic-bezier(0.7, 0.2, 0.2, 1)",
            transform: isExiting ? "translateY(-30px)" : "translateY(0)",
            opacity: isExiting ? 0 : 1,
            willChange: "transform, opacity",
            userSelect: "none",
            padding: "24px",
            maxWidth: "90vw",
          }}
        >
          {/* Brand Logo */}
          <img
            src={logo.src}
            alt={logo.alt || "Kanhav Group Logo"}
            style={{
              width: "100%",
              maxWidth: `${logoWidth}px`,
              height: "auto",
              maxHeight: "130px",
              objectFit: "contain",
              filter: "drop-shadow(0 12px 35px rgba(0, 0, 0, 0.6))",
            }}
            draggable={false}
          />

          {/* Minimal Industrial Progress Track */}
          <div
            style={{
              marginTop: "24px",
              width: "140px",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              borderRadius: "9999px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="kanhav-preloader-bar"
              style={{
                height: "100%",
                backgroundColor: "#c93f0b",
                borderRadius: "9999px",
                boxShadow: "0 0 10px rgba(201, 63, 11, 0.8)",
              }}
            />
          </div>

          {/* Micro Brand Descriptor */}
          <span
            style={{
              marginTop: "12px",
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono, monospace)",
              color: "rgba(255, 255, 255, 0.4)",
              fontWeight: 500,
            }}
          >
            Advanced Composites
          </span>
        </div>
      </div>
    </>
  );
}
