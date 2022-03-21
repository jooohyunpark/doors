import dynamic from 'next/dynamic'
import { doors, roomData } from '@/data'

const index = 1

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
})

const R3F = () => {
  const data = roomData.filter((room, i) => i !== index)

  return (
    <>
      <Scene color={roomData[index].color} doors={doors(data)} />
    </>
  )
}

const Page = () => {
  return (
    <>
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Room ' + index,
    },
  }
}
