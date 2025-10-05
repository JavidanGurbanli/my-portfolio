import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item, liftHover } from "../motionVariants";
import MotionLink from "./MotionLink";
import { Briefcase, ExternalLink } from "lucide-react";

type RefProp = React.RefObject<HTMLElement | null>;

interface Project {
  imgUrl: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectsProps {
  refProp?: RefProp;
  darkMode?: boolean;
  projects: Project[];
}

const Projects = ({ refProp, darkMode = true, projects }: ProjectsProps) => {
  return (
    <motion.section ref={refProp} id="projects" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={container}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div key={index} whileHover={liftHover} variants={item} className={`group rounded-2xl p-8 transition-all duration-300 ${darkMode ? "bg-gray-900 hover:bg-gray-850" : "bg-gray-100 hover:bg-gray-200"}`}>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <Image src={project.imgUrl} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-slate-700"}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech: string, i: number) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
                    {tech}
                  </span>
                ))}
              </div>
              <MotionLink href={project.link} target="_blank" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </MotionLink>
            </motion.div>
          ))}
        </div>
      </div>
  </motion.section>
  );
};

export default Projects;