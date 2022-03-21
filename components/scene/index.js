import Door from '@/components/Door'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = ({ doors = [], color = 0xffffff }) => {
  return (
    <Canvas>
      <color attach="background" args={[color]} />
      <Floor />
      <ambientLight color={color} intensity={3} />

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
