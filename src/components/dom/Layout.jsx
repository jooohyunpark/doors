import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const Layout = forwardRef(({ children }, ref) => {
  const localRef = useRef()

  const router = useRouter()
  const { id } = router.query

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}>
        <div
          ref={mergeRefs([ref, localRef])}
          className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
          {children}
        </div>
      </motion.main>
    </AnimatePresence>
  )
})
Layout.displayName = 'Layout'

export default Layout
