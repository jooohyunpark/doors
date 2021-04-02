import { Canvas } from 'react-three-fiber'
import Door from '@/components/Door'
import Floor from '@/components/Floor'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Control from '@/components/Control'

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
              color={0x000000}
              position={door.position}
              rotation={door.rotation}
              url={'/'}
              key={index}
            />
          )
        })}

        <Control />

        <ambientLight intensity={1} castShadow />
      </Canvas>
    </div>
  )
}

export default Scene2
