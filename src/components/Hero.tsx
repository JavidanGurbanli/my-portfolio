import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { container, item, ctaHover, chevronAnim } from "../motionVariants";
import { RefProp } from "../types";

interface HeroProps {
  refProp?: RefProp;
  handleNavClick: (sectionId: string) => void;
}

const Hero = ({ refProp, handleNavClick }: HeroProps) => {
  return (
    <section ref={refProp} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto" variants={container} initial="hidden" animate="visible">
        <motion.div className="mb-6" variants={item}>
          <span className="text-blue-500 text-lg font-semibold">Hello, I&apos;m</span>
        </motion.div>
        <motion.h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6" variants={item}>
          Javidan <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Gurbanli</span>
        </motion.h1>
        <motion.p className="text-xl sm:text-2xl md:text-3xl mb-8" variants={item}>
          Frontend Developer & Creative Problem Solver
        </motion.p>
        <motion.p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400" variants={item}>
          Crafting exceptional digital experiences with modern technologies and innovative solutions
        </motion.p>
        <motion.div className="flex justify-center space-x-6" variants={item}>
          <motion.a whileHover={ctaHover} whileTap={{ scale: 0.98 }} href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform">
            Get In Touch
          </motion.a>
          <motion.a whileHover={ctaHover} whileTap={{ scale: 0.98 }} href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }} className={`px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform`}>
            View Work
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2" whileHover={{ y: -6 }} animate={chevronAnim}>
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default Hero;