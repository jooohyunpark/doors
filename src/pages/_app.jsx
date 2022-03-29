import Header from '@/config'
import { AnimatePresence } from 'framer-motion'
import '@/styles/index.css'
import dynamic from 'next/dynamic'

const Palette = dynamic(() => import('@/components/dom/Palette'), {
  ssr: false
})

function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Palette />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default App
