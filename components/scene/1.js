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

      <Floor receiveShadow color={0xffffff} />

      {doors(10).map((door, index) => {
        return (
          <Door
            color={0x00ff00}
            position={door.position}
            rotation={door.rotation}
            url={'/'}
            key={index}
          />
        )
      })}
    </Canvas>
  )
}

export default Scene
