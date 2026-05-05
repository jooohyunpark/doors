import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";

const style = { width: "100%", height: "100%" };

export default function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
