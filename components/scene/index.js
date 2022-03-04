import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

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
    <Canvas>
      <Floor />
      {/* <ambientLight intensity={0.3} /> */}

      {doors(10).map((door, index) => {
        return (
          <Door
            color={0xffffff}
            position={door.position}
            rotation={door.rotation}
            url={'/1'}
            key={index}
          />
        )
      })}
    </Canvas>
  )
}

export default Scene
