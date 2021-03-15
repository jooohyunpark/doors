import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Door from '@/components/Door'
import Floor from '@/components/Floor'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'

const Scene2 = () => {
  const doors = (count = 10) => {
    const data = []

    for (let i = 0; i < count; i++) {
      data.push({
        position: [
          getRandomInt(-10, 10) * doorConfig.width * 2,
          0,
          getRandomInt(-10, 10) * doorConfig.width * 2
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
        shadowMap
        camera={{
          near: 0.1,
          far: 10000,
          position: [4, 1, -4],
          zoom: 3
        }}>
        <Floor receiveShadow color={0xffffff} />

        {doors(20).map((door, index) => {
          return (
            <Door
              castShadow
              color={0x000000}
              position={door.position}
              rotation={door.rotation}
              url={'/'}
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

        <ambientLight intensity={1} castShadow />
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
