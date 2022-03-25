import Exit from '@/components/canvas/Exit'

const Scene = ({ exits = [], color = '#000000' }) => {
  return (
    <>
      <color attach='background' args={[color]} />

      {exits.map((exit, index) => {
        return (
          <Exit
            position={exit.position}
            rotation={exit.rotation}
            color={exit.color}
            url={exit.url}
            key={index}
          />
        )
      })}
    </>
  )
}

export default Scene
