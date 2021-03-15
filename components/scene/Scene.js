import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Door from '@/components/Door'
import Floor from '@/components/Floor'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'

const Scene = () => {
  const doors = (num = 10) => {
    const data = []

    for (let i = 0; i < num; i++) {
      data.push({
        position: [
          getRandomInt(-5, 5) * doorConfig.width * 3,
          0,
          getRandomInt(-5, 5) * doorConfig.width * 3
        ],
        rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0]
      })
    }

    return data
  }

  return (
    <div className="scene">
      <Canvas
        orthographic
        colorManagement
        gl={{ antialias: true }}
        camera={{
          near: 0.1,
          far: 10000,
          position: [4, 1, -4],
          zoom: 3
        }}>
        <Floor />

        {doors(10).map((door, index) => {
          return (
            <Door
              color={0xffffff}
              position={door.position}
              rotation={door.rotation}
              url={'/world'}
              key={index}
            />
          )
        })}

        <OrbitControls
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          enableRotate={true}
          minPolarAngle={Math.PI * 0.5 * 0.8}
          maxPolarAngle={Math.PI * 0.5 * 0.8}
          enableZoom={false}
          minDistance={1000}
          maxDistance={1000}
          target={[0, doorConfig.height * 0.5, 0]}
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
