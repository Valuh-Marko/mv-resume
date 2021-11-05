import React from "react";
import "./navigation.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation({ pageNum }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="navigation">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          className="main_page_num">
          {pageNum}
        </motion.h1>
      </div>
    </AnimatePresence>
  );
}
