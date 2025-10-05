import React from "react";
import { Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { container, item, liftHover } from "../motionVariants";
import { RefProp, SkillsData as SkillsDataType } from "../types";

interface SkillsProps {
  refProp?: RefProp;
  darkMode?: boolean;
  skills: SkillsDataType;
}

const Skills = ({ refProp, darkMode = true, skills }: SkillsProps) => {
  return (
  <motion.section ref={refProp} id="skills" className="py-20 px-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={container}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 className="text-4xl font-bold mb-2" variants={item}>Skills</motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/80" : "bg-white"} backdrop-blur-sm`} variants={item}>
            <h3 className="text-2xl font-bold mb-6 text-center">Front-End Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.frontend.map((skill: string, index: number) => (
                <motion.div key={index} className="flex items-center space-x-2" variants={item} whileHover={liftHover}>
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className={darkMode ? "text-gray-300" : "text-gray-800"}>{skill}</span>
                </motion.div>
              ))}
            </div>
             <div className="mt-6 grid grid-cols-2 gap-4">
              {skills.backend.map((skill: string, index: number) => (
                <motion.div key={index} className="flex items-center space-x-2" variants={item} whileHover={liftHover}>
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className={darkMode ? "text-gray-300" : "text-gray-800"}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/80" : "bg-white"} backdrop-blur-sm`} variants={item}>
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill: string, index: number) => (
                <motion.div key={index} className="flex items-center space-x-2" variants={item} whileHover={liftHover}>
                  <User className="w-4 h-4 text-blue-400" />
                  <span className={darkMode ? "text-gray-300" : "text-gray-800"}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;