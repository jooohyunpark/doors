"use client";

import { useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const params = useParams();
  const pathname = usePathname();
  const { id } = params;

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
