"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const GLOW_SIZE = 340;
const HALF_GLOW = GLOW_SIZE / 2;

export function MouseGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);

  const springX = useSpring(x, { stiffness: 140, damping: 24, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 140, damping: 24, mass: 0.3 });

  const tx = useTransform(springX, (value) => value - HALF_GLOW);
  const ty = useTransform(springY, (value) => value - HALF_GLOW);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    }

    function handleMouseLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="mouse-glow hidden md:block"
      style={{ x: tx, y: ty }}
      animate={{ opacity: visible ? 0.78 : 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    />
  );
}
