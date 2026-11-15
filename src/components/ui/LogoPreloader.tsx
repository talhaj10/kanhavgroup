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
  duration = 1.3,
  logoWidth = 320,
  style,
  onComplete,
}: LogoPreloaderProps) {
  // Start with logo visible immediately ("loading") so it is NEVER a blank screen
  const [phase, setPhase] = useState<"loading" | "logoOut" | "done">("loading");

  useEffect(() => {
    // If preloader already ran in this browser session, finish immediately
    if (typeof window !== "undefined" && window.sessionStorage.getItem("kanhav_preloader_done")) {
      setPhase("done");
      onComplete?.();
      return;
    }

    // Lock scroll during preloading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Animate logo up and out
    const t1 = setTimeout(() => {
      startTransition(() => setPhase("logoOut"));
    }, duration * 1000);

    // 2. Fade background out and finalize
    const t2 = setTimeout(() => {
      startTransition(() => {
        setPhase("done");
        document.body.style.overflow = originalOverflow || "";
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("kanhav_preloader_done", "true");
        }
        onComplete?.();
      });
    }, duration * 1000 + 550);

    // 3. Failsafe: force remove preloader after 2.0s even if browser delays
    const tFailsafe = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = originalOverflow || "";
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(tFailsafe);
      document.body.style.overflow = originalOverflow || "";
    };
  }, [duration, onComplete]);

  if (phase === "done") return null;

  let logoTranslateY = 0;
  let logoOpacity = 1;

  if (phase === "logoOut") {
    logoTranslateY = -50;
    logoOpacity = 0;
  }

  const bgOpacity = phase === "logoOut" ? 0 : 1;
  const transition = "all 0.55s cubic-bezier(.7,.2,.2,1)";

  return (
    <div
      style={{
        ...style,
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
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
          padding: "1.5rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt || "Kanhav Group Logo"}
          style={{
            width: "100%",
            maxWidth: `min(${logoWidth}px, 76vw)`,
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
