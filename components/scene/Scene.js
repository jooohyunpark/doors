import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Exit from '@/components/Exit'
import Floor from '@/components/Floor'
import { ABOVE } from '@/utils'

const SceneHome = () => {
  return (
    ABOVE('lg') && (
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

          <Exit position={[20, 0, 40]} title={'Test'} />
          <Exit position={[-100, 0, 100]} rotation={[0, -Math.PI * 0.5, 0]} title={'About'} />
          <Exit position={[120, 0, -80]} rotation={[0, Math.PI * 0.5, 0]} title={'About'} />
          <Exit position={[-60, 0, -60]} rotation={[0, Math.PI, 0]} title={'Test'} />
          <Exit position={[-200, 0, 100]} rotation={[0, 0, 0]} title={'Test'} />
          <Exit position={[20, 0, 200]} rotation={[0, Math.PI * 0.5, 0]} title={'About'} />

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
  )
}

export default SceneHome
