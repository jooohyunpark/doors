import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { doorConfig } from "@/data";

export default function Scene({ children }) {
  return (
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
  );
}
