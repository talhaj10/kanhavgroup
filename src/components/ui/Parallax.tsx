"use client";

import React, { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  speed?: number; // negative = lag behind (classic background parallax), positive = move faster
  scale?: number; // default 1.16 to prevent white borders during transform
  containerClassName?: string;
  imageClassName?: string;
}

/**
 * ParallaxImage
 * High-performance, GPU hardware-accelerated image parallax for Swiss industrial UI.
 * Wraps Next.js Image inside an overflow-hidden mask with subtle scale and translation.
 */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  speed = -0.15,
  scale = 1.16,
  containerClassName = "",
  imageClassName = "",
  alt,
  src,
  fill = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate pixel displacement range based on speed factor
  const travelDistance = speed * 180;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [travelDistance, -travelDistance]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ isolation: "isolate" }}
    >
      <motion.div
        style={{
          y,
          scale: shouldReduceMotion ? 1 : scale,
          willChange: "transform",
        }}
        className={fill ? "absolute inset-0 w-full h-full" : "relative w-full h-full"}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className={`object-cover ${imageClassName}`}
          {...props}
        />
      </motion.div>
    </div>
  );
};

export interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // positive = elevate/float forward, negative = drift backward
  travelDistance?: number; // base pixel travel distance, default 35
  className?: string;
}

/**
 * ParallaxLayer
 * Floating technical HUD or watermark component that moves along the Y-axis
 * relative to user scroll.
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.12,
  travelDistance = 35,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const delta = speed * travelDistance * 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-delta, delta]
  );

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{
          y,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
