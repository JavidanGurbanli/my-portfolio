import React from "react";
import { motion } from "framer-motion";

interface FooterProps {
  darkMode?: boolean;
}

const Footer = ({ darkMode = true }: FooterProps) => {
  return (
    <motion.footer initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`py-8 text-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
        © {new Date().getFullYear()} Javidan Gurbanli
      </p>
    </motion.footer>
  );
};

export default Footer;