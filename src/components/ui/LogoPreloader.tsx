"use client";

import React from "react";

export interface LogoPreloaderProps {
  logo?: {
    src: string;
    alt?: string;
  };
  backgroundColor?: string;
  duration?: number;
  logoWidth?: number;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

/**
 * LogoPreloader
 * Disabled blocking overlay to ensure 100% instant rendering across all mobile devices
 * and prevent black screen lockouts during network or client hydration.
 */
export default function LogoPreloader({ onComplete }: LogoPreloaderProps) {
  React.useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return null;
}
