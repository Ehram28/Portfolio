"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type CanvasCamera = NonNullable<ComponentProps<typeof Canvas>["camera"]>;

type CanvasWrapperProps = {
  children: React.ReactNode;
  className?: string;
  camera?: CanvasCamera;
  eager?: boolean;
};

export function CanvasWrapper({
  children,
  className,
  camera = { position: [0, 0, 4], fov: 45 },
  eager = false
}: CanvasWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(eager);

  useEffect(() => {
    if (shouldRenderCanvas) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCanvas(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRenderCanvas]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[320px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-900/30 shadow-glow md:h-[420px]",
        className
      )}
    >
      {shouldRenderCanvas ? (
        <Canvas
          dpr={[0.85, 1.25]}
          camera={camera}
          gl={{ antialias: true, powerPreference: "default" }}
        >
          <ambientLight intensity={0.62} />
          <directionalLight position={[3, 4, 2]} intensity={1} />
          {children}
          <Preload all />
        </Canvas>
      ) : (
        <div className="grid h-full place-items-center">
          <span className="mono rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-accent-300">
            3D scene standby
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-accent-400/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/25 to-transparent" />
    </div>
  );
}
