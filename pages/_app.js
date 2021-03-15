import '@/assets/styles/main.scss'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
