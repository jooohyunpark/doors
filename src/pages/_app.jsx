import Header from '@/config'
import '@/styles/index.css'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default App
