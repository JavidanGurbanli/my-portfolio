import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { item, liftHover } from "../motionVariants";

type RefProp = React.RefObject<HTMLElement | null>;

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface ExperienceProps {
  refProp?: RefProp;
  darkMode?: boolean;
  experience: ExperienceItem[];
}

const Experience = ({ refProp, darkMode = true, experience }: ExperienceProps) => {
  return (
    <motion.section ref={refProp} id="experience" className="py-20 px-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {experience.map((exp: ExperienceItem, index: number) => (
            <motion.div key={index} variants={item} whileHover={liftHover} className={`relative pl-8 pb-8 border-l-2 ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-[9px]"></div>
              <div className="text-blue-500 font-semibold mb-2">{exp.year}</div>
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <div className={`text-lg mb-3 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{exp.company}</div>
              <p className={darkMode ? "text-gray-400" : "text-slate-700"}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;