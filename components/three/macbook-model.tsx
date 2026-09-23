"use client";

import { useGLTF } from "@react-three/drei";

type MacbookModelProps = {
  path?: string;
};

export function MacbookModel({ path = "/models/macbook.glb" }: MacbookModelProps) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={1.2} position={[0, -1.2, 0]} />;
}
