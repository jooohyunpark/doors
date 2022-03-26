import Door from '@/components/canvas/Door'
import Floor from '@/components/canvas/Floor'

const Scene = ({ data = [], color = '#000000' }) => {
  return (
    <>
      {/* <Floor /> */}
      <color attach='background' args={[color]} />

      {data.map((door, i) => {
        return (
          <Door
            position={door.position}
            rotation={door.rotation}
            color={door.color}
            id={door.id}
            key={i}
          />
        )
      })}
    </>
  )
}

export default Scene
