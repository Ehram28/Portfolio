"use client";

import { Float, Html, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SkillsSceneProps = {
  skills: string[];
};

export function SkillsScene({ skills }: SkillsSceneProps) {
  const group = useRef<THREE.Group>(null);

  // Skills ko 3D positions dena
  const points = useMemo(() => {
    const radius = 1.55;

    return skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;

      const ringOffset = index % 2 === 0 ? 0 : 0.18;

      return {
        skill,
        position: [
          Math.cos(angle) * (radius + ringOffset),
          Math.sin(index * 1.7) * 0.45,
          Math.sin(angle) * (radius + ringOffset),
        ] as [number, number, number],
      };
    });
  }, [skills]);

  // Lines ke liye points
  const connections = useMemo(() => {
    return points.map((item) => {
      return {
        start: [0, 0, 0] as [number, number, number],
        end: item.position,
      };
    });
  }, [points]);

  // Slow rotation
  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.045;

    group.current.rotation.x =
      Math.sin(Date.now() * 0.00035) * 0.035;
  });

  return (
    <group ref={group}>

      {/* =========================
          CENTRAL DFIR CORE
      ========================== */}

      <mesh>
        <icosahedronGeometry args={[0.62, 2]} />
        <meshStandardMaterial
          color="#082f3d"
          emissive="#0d9488"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color="#14b8a6"
          emissive="#14b8a6"
          emissiveIntensity={1.4}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Core label */}
      <Html center distanceFactor={8}>
        <div className="pointer-events-none whitespace-nowrap text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-300">
            DFIR
          </div>

          <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-zinc-400">
            Investigation Core
          </div>
        </div>
      </Html>

      {/* =========================
          CONNECTION LINES
      ========================== */}

      {connections.map((connection, index) => (
        <Line
          key={`line-${index}`}
          points={[connection.start, connection.end]}
          color="#0f766e"
          transparent
          opacity={0.32}
          lineWidth={1}
        />
      ))}

      {/* =========================
          SKILL NODES
      ========================== */}

      {points.map((item, index) => (
        <Float
          key={item.skill}
          speed={0.8 + (index % 4) * 0.12}
          floatIntensity={0.18}
          rotationIntensity={0.08}
          position={item.position}
        >
          {/* Node */}
          <mesh>
            <sphereGeometry args={[0.11, 16, 16]} />

            <meshStandardMaterial
              color="#14b8a6"
              emissive="#14b8a6"
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* Small outer ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.16, 0.008, 8, 32]} />

            <meshStandardMaterial
              color="#0d9488"
              emissive="#0d9488"
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Skill label */}
          <Html
            center
            distanceFactor={10}
            position={[0, 0.22, 0]}
          >
            <div
              className="
                pointer-events-none
                whitespace-nowrap
                rounded-full
                border
                border-accent-400/30
                bg-slate-950/80
                px-2.5
                py-1
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-zinc-200
                shadow-lg
                backdrop-blur-sm
              "
            >
              {item.skill}
            </div>
          </Html>
        </Float>
      ))}

      {/* =========================
          OUTER FORENSIC RINGS
      ========================== */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.15, 0.008, 8, 80]} />

        <meshStandardMaterial
          color="#0f766e"
          emissive="#0f766e"
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.85, 0.006, 8, 80]} />

        <meshStandardMaterial
          color="#155e75"
          emissive="#155e75"
          emissiveIntensity={0.3}
          transparent
          opacity={0.35}
        />
      </mesh>

    </group>
  );
}