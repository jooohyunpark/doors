import dynamic from 'next/dynamic'
import { doors, roomData } from '@/data'
import { motion, AnimatePresence } from 'framer-motion'

// import Scene from '@/components/canvas/Scene'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false
})

// dom components goes here
const DOM = () => {
  return <></>
}

// canvas components goes here
const R3F = () => {
  const data = roomData.filter((room, i) => i !== 0)

  return (
    <>
      <Scene color={'#000000'} doors={doors(data)} />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
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
