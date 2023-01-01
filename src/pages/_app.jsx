import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

const Palette = dynamic(() => import('@/components/dom/Palette'), {
  ssr: false
})
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header title={pageProps.title} />
      <Palette />

      <AnimatePresence mode='wait'>
        <Layout ref={ref} id={id}>
          <Component {...pageProps} />
          {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
           * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
           * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
          {Component?.canvas && (
            <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
              {Component.canvas(pageProps)}
            </Scene>
          )}
        </Layout>
      </AnimatePresence>
    </>
  )
}
