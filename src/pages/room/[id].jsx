import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import Canvas from '@/components/canvas'
import Main from '@/components/dom/Main'

const Room = ({ id = '' }) => {
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

export async function getStaticPaths() {
  const paths = roomData
    .filter((data) => data.id > 0)
    .map((data) => ({
      params: {
        id: data.id.toString()
      }
    }))

  return {
    paths,
    fallback: false
  }
}

export default Room

export async function getStaticProps({ params }) {
  return {
    props: {
      title: 'Room ' + params.id,
      id: params.id,
      key: params.id // to destroy component on route change
    }
  }
}
