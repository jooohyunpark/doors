import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import Main from '@/components/dom/Main'
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@/components/canvas'), { ssr: false })

const Room = ({ id = '' }) => {
  return (
    <Main id={id}>
      <Canvas>
        <Scene
          color={roomData.find((room) => room.id === +id).color}
          data={doors(roomData.filter((room) => room.id !== +id))}
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
