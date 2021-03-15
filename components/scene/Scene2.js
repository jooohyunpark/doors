import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Door from '@/components/Door'
import Floor from '@/components/Floor'

const Scene2 = () => {
  return (
    <div className="scene">
      <Canvas
        orthographic
        colorManagement
        camera={{
          near: 0.1,
          far: 10000,
          position: [4, 1, -4],
          zoom: 5
        }}>
        <ambientLight intensity={1} />
        <Floor color={0xffffff} />

        <Door color={0x000000} position={[20, 0, 40]} url={'/'} />

        <OrbitControls
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI * 0.5 * 0.85}
          maxPolarAngle={Math.PI * 0.5 * 0.85}
          minDistance={1000}
          maxDistance={1000}
          target={[0, 20 * 1.618 * 0.5, 0]}
        />
      </Canvas>

      <style jsx>{`
        .scene {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default Scene2
