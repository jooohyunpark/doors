import dynamic from 'next/dynamic'
import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import Main from '@/components/dom/Main'

const Canvas = dynamic(() => import('@/components/canvas'), { ssr: false })

const Page = ({ id = 0 }) => {
  return (
    <Main>
      <Canvas>
        <Scene
          color={roomData[id].color}
          data={doors(roomData.filter((room) => room.id !== id))}
        />
      </Canvas>
    </Main>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Doors'
    }
  }
}
