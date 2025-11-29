import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import flagImg from "../assets/photos/extras/Flag_of_Mexico.jpg";

function FlagMesh() {
  const meshRef = useRef();
  const texture = useTexture(flagImg);
  const originalPositions = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry;
    const positionAttr = geometry.attributes.position;

    if (!originalPositions.current) {
      originalPositions.current = positionAttr.array.slice();
    }

    const t = clock.getElapsedTime();

    for (let i = 0; i < positionAttr.count; i++) {
      const x = originalPositions.current[i * 3 + 0];
      const y = originalPositions.current[i * 3 + 1];

      // Waving parameters
      const waveX = 0.1 * Math.sin(x * 5 + t * 3);
      const waveY = 0.08 * Math.sin(y * 7 + t * 2.5);
      const waveXY = 0.02 * Math.sin(x * 10 + y * 10 + t * 4);

      positionAttr.setZ(i, waveX + waveY + waveXY);
    }

    positionAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 6, 60, 30]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} roughness={0.8} />
    </mesh>
  );
}

/**
 * Updated WavingFlagSection component:
 * - Section-level canvas (not full-screen fixed)
 * - Full width of container
 * - Height configurable via props
 * - Can control opacity via style or material
 */
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
          zIndex: -1, // behind content
          pointerEvents: "none", // so it doesn't block clicks
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <FlagMesh />
      </Canvas>
      {/* Optional overlay to adjust visibility */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 1 - opacity, zIndex: -1 }}
      />
    </div>
  );
}
