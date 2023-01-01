import React from "react";
import { AnimatePresence, motion } from "framer-motion";
function Loading() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-screen">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        exit={{ width: 0, transition: { duration: 0.5, delay: 0.4 } }}
        className="absolute top-0 left-0 w-0 h-full bg-primary z-10"
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-0 left-0 w-0 h-full bg-secondary z-20"
      ></motion.div>
    </div>
  );
}

export default Loading;
