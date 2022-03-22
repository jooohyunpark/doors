import Header from '@/config'
import { AnimatePresence } from 'framer-motion'
import '@/styles/index.css'

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
