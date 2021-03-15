import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Door from '@/components/Door'
import Floor from '@/components/Floor'

const Scene = () => {
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
        <Floor />

        <Door position={[20, 0, 40]} url={'/world'} />
        <Door position={[-100, 0, 100]} rotation={[0, -Math.PI * 0.5, 0]} url={'/world'} />
        <Door position={[120, 0, -80]} rotation={[0, Math.PI * 0.5, 0]} url={'/world'} />
        <Door position={[-60, 0, -60]} rotation={[0, Math.PI, 0]} url={'/world'} />
        <Door position={[-200, 0, 100]} rotation={[0, 0, 0]} url={'/world'} />
        <Door position={[20, 0, 200]} rotation={[0, Math.PI * 0.5, 0]} url={'/world'} />

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

        {/* <ambientLight intensity={0.3} /> */}
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

export default Scene
