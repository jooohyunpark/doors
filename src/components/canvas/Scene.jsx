import Door from '@/components/canvas/Door'

const Scene = ({ doors = [], color = '#000000' }) => {
  return (
    <>
      <color attach='background' args={[color]} />

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
