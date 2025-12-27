"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
