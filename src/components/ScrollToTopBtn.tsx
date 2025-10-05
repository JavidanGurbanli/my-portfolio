import React from "react";
import { ArrowUpFromDot } from "lucide-react";
import { motion } from "framer-motion";

interface ScrollProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTopButton = ({ showScrollTop, scrollToTop }: ScrollProps) => {
  if (!showScrollTop) return null;

  return (
    <motion.button onClick={scrollToTop} whileHover={{ scale: 1.07 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="group fixed bottom-8 right-8 p-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer" aria-label="Scroll to top">
      <ArrowUpFromDot className="w-6 h-6 text-white" />
    </motion.button>
  );
};

export default ScrollToTopButton;