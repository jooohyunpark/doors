import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import LCanvas from '@/components/canvas'
import Main from '@/components/dom/Main'

const Page = ({ id = 0 }) => {
  return (
    <Main>
      <LCanvas>
        <Scene
          color={roomData[id].color}
          doors={doors(roomData.filter((room) => room.id !== id))}
        />
      </LCanvas>
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
