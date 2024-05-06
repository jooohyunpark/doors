import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "@/components/Head";

import "./globals.css";

export default function App({ Component, pageProps = { title: "doors" } }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head />

      <AnimatePresence mode="wait">
        <motion.main
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
