"use client";

import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.28;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial
          color="#2dd4bf"
          roughness={0.35}
          metalness={0.2}
          wireframe
        />
      </mesh>
      <mesh scale={1.015}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#14b8a6"
          transparent
          opacity={0.2}
          roughness={0.8}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.55, 0.02, 18, 90]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <>
      <Stars radius={30} depth={35} count={degradedParticleCount()} factor={3} fade speed={0.6} />
      <Globe />
    </>
  );
}

function degradedParticleCount() {
  if (typeof window === "undefined") return 800;
  return window.innerWidth < 768 ? 500 : 1000;
}
