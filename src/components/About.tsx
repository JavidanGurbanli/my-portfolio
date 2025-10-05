import React from "react";
import { User, Github, Linkedin, Mail } from "lucide-react";
import MotionLink from "./MotionLink";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type RefProp = React.RefObject<HTMLElement | null>;

interface AboutProps {
  refProp?: RefProp;
  darkMode?: boolean;
}

const About = ({ refProp, darkMode = true }: AboutProps) => {
  return (
    <motion.section
      ref={refProp}
      id="about"
      className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <User className="w-8 h-8 mr-3 text-blue-500" />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-slate-700"
              }`}
            >
              I&apos;m a passionate front-end developer with a strong focus on
              creating beautiful, functional, and user-centered digital
              experiences. I specialize in building modern web applications
              using cutting-edge technologies.
            </p>
            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-slate-700"
              }`}
            >
              My journey in tech started with a curiosity about how things
              work, and it has evolved into a career where I get to solve
              complex problems and bring ideas to life through code.
            </p>
            <div className="flex space-x-4 mt-8">
              <MotionLink href="https://github.com/JavidanGurbanli" target="_blank" className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110" aria-label="GitHub Profile">
                <Github className="w-6 h-6" />
              </MotionLink>
              <MotionLink href="https://www.linkedin.com/in/javidangurbanli/" target="_blank" className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6" />
              </MotionLink>
              <MotionLink href="mailto:javidangrbnl@gmail.com" className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110" aria-label="Send an Email">
                <Mail className="w-6 h-6" />
              </MotionLink>
            </div>
          </div>
          <motion.div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span
                  className={darkMode ? "text-gray-400" : "text-slate-600"}
                >
                  Location:
                </span>
                <span className="font-semibold text-right">Baku, Azerbaijan</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={darkMode ? "text-gray-400" : "text-slate-600"}
                >
                  Experience:
                </span>
                <span className="font-semibold">1+ Year</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={darkMode ? "text-gray-400" : "text-slate-600"}
                >
                  Education:
                </span>
                <span className="font-semibold text-right">B.Sc. Computer Eng.</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={darkMode ? "text-gray-400" : "text-slate-600"}
                >
                  Availability:
                </span>
                <span className="font-semibold text-green-500 text-right">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
 