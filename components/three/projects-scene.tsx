"use client";

import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { ProjectItem } from "@/lib/portfolio-data";

type ProjectsSceneProps = {
  projects: ProjectItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function ProjectsScene({
  projects,
  activeIndex,
  onSelect
}: ProjectsSceneProps) {
  const carousel = useRef<THREE.Group>(null);

  const cards = useMemo(() => {
    return projects.map((project, index) => {
      const offset = index - activeIndex;
      const x = offset * 2.15;
      const z = -Math.abs(offset) * 0.9;
      const y = Math.abs(offset) * -0.08;
      return { project, index, offset, position: [x, y, z] as [number, number, number] };
    });
  }, [projects, activeIndex]);

  useFrame((_, delta) => {
    if (!carousel.current) return;
    carousel.current.rotation.y = THREE.MathUtils.lerp(
      carousel.current.rotation.y,
      Math.sin(Date.now() * 0.0004) * 0.07,
      delta
    );
  });

  return (
    <group ref={carousel}>
      {cards.map(({ project, index, offset, position }) => {
        const isActive = index === activeIndex;
        return (
          <group
            key={project.title}
            position={position}
            rotation={[0, -offset * 0.25, 0]}
            onClick={() => onSelect(index)}
          >
            <mesh scale={isActive ? 1.1 : 0.88}>
              <boxGeometry args={[1.6, 1.05, 0.16]} />
              <meshStandardMaterial
                color={isActive ? "#14b8a6" : "#334155"}
                emissive={isActive ? "#14b8a6" : "#0f172a"}
                emissiveIntensity={isActive ? 0.25 : 0.08}
              />
            </mesh>
            <Html center distanceFactor={7.5}>
              <div className="w-36 rounded-md border border-white/15 bg-surface-950/90 p-2 text-center text-[10px] uppercase tracking-[0.1em] text-zinc-100 shadow-glow">
                {project.title}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
