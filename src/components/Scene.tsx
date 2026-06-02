"use client";

import { type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import { doorConfig } from "@/data";

const fallbackStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
};

const Fallback = () => (
  <div style={fallbackStyle}>
    This experience requires a browser with WebGL enabled.
  </div>
);

export default function Scene({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Canvas flat>
        <OrthographicCamera
          makeDefault
          position={[1, 1, -1]}
          near={0}
          far={10000}
          zoom={3}
        />

        <OrbitControls
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          enableRotate={true}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI * 0.5 * 0.75}
          maxPolarAngle={Math.PI * 0.5 * 0.75}
          enableZoom={false}
          minDistance={1000}
          maxDistance={1000}
          target={[0, doorConfig.height * 0.5, 0]}
        />

        {children}
      </Canvas>
    </ErrorBoundary>
  );
}
