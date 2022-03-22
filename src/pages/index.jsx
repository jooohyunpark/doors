import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import LCanvas from '@/components/canvas'
import Main from '@/components/dom/Main'

const index = 0

const Page = () => {
  const data = roomData.filter((room, i) => i !== index)

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <LCanvas>
        <Scene color={roomData[index].color} doors={doors(data)} />
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
