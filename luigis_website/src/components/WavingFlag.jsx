import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import flagImg from "../assets/photos/extras/Flag_of_Mexico.jpg";

// Flag geometry constants — more segments = smoother wave
const WIDTH = 10;
const HEIGHT = 6;
const SEG_W = 100;
const SEG_H = 60;

function FlagMesh() {
  const meshRef = useRef();
  const texture = useTexture(flagImg);
  const originalPositions = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry;
    const pos = geometry.attributes.position;

    if (!originalPositions.current) {
      originalPositions.current = pos.array.slice();
    }

    const t = clock.getElapsedTime();
    const halfW = WIDTH / 2;

    for (let i = 0; i < pos.count; i++) {
      const ox = originalPositions.current[i * 3];

      // Normalize x from -halfW…+halfW → 0…1 (left edge = 0, right edge = 1)
      const normalizedX = (ox + halfW) / WIDTH;

      // Amplitude grows toward the right (flag pinned on left)
      const amp = 0.45 * normalizedX * normalizedX;

      // Primary wave propagates left-to-right
      const primary = amp * Math.sin(normalizedX * 10 - t * 3.5);
      // Subtle secondary ripple for fabric texture
      const secondary = amp * 0.25 * Math.sin(normalizedX * 18 - t * 5.5);

      pos.setZ(i, primary + secondary);
    }

    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[WIDTH, HEIGHT, SEG_W, SEG_H]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function WavingFlagSection({ height = 600, opacity = 0.4 }) {
  return (
    <div className="relative w-full" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.4} position={[4, 3, 5]} />
        <directionalLight intensity={0.4} position={[-4, -2, 2]} color="#ffffff" />
        <FlagMesh />
      </Canvas>
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 1 - opacity, zIndex: -1 }}
      />
    </div>
  );
}
