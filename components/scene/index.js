import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = ({ doors = [], color = 0xffffff }) => {
  return (
    <Canvas>
      <Floor />
      <ambientLight color={color} intensity={1} />

      {doors.map((door, index) => {
        return (
          <Door
            position={door.position}
            rotation={door.rotation}
            color={door.color}
            url={door.url}
            key={index}
          />
        )
      })}
    </Canvas>
  )
}

export default Scene
