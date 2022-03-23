import Router, { useRouter } from 'next/router'
import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import Canvas from '@/components/canvas'
import Main from '@/components/dom/Main'

const Room = () => {
  const router = useRouter()
  const { id } = router.query

  const lastId = [...roomData].pop().id

  if (!id) return null

  if (+id && +id > lastId) {
    Router.push('/')
    return null
  }

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Canvas>
        <Scene
          color={roomData.find((room) => room.id === +id).color}
          doors={doors(roomData.filter((room) => room.id !== +id))}
        />
      </Canvas>
    </Main>
  )
}

export default Room

// export async function getStaticProps() {
//   return {
//     props: {
//       title: 'Room '
//     }
//   }
// }
