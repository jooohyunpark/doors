import { doors, roomData } from '@/data'
import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Room = dynamic(() => import('@/components/canvas/Room'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return <></>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = ({ id = 0 }) => {
  return <Room color={roomData[id].color} data={doors(roomData.filter((room) => room.id !== id))} />
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

export async function getStaticProps({ params }) {
  return {
    props: {
      title: 'Room ' + params.id,
      id: params.id,
      key: params.id // to destroy component on route change
    }
  }
}
