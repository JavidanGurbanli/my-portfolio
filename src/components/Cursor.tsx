"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: "rgba(0, 200, 255, 0.7)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        translateX: sx,
        translateY: sy,
      }}
    />
  );
}
