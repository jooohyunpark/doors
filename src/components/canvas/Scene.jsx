import Door from '@/components/canvas/Door'
import Floor from '@/components/canvas/Floor'

const Scene = ({ doors = [], color = 0xffffff }) => {
  return (
    <>
      <color attach='background' args={[color]} />
      {/* <Floor /> */}
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
    </>
  )
}

export default Scene
