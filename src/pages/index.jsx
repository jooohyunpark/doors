import dynamic from 'next/dynamic'
import { doors, roomData } from '@/data'

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
Page.canvas = ({ id = 0 }) => (
  <Room color={roomData[id].color} data={doors(roomData.filter((room) => room.id !== id))} />
)

export async function getStaticProps() {
  return { props: { title: 'Doors' } }
}
