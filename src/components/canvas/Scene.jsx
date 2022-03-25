import Door from '@/components/canvas/Door'

const Scene = ({ doors = [], color = '#000000' }) => {
  return (
    <>
      <color attach='background' args={[color]} />

      {doors.map((door, i) => {
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
