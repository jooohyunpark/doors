import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import LCanvas from '@/components/canvas'
import Main from '@/components/dom/Main'

const Page = ({ id = 0 }) => {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
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
