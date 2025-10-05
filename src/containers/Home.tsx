"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionId, Project, ExperienceItem, SkillsData, RefProp } from "../types";
import CustomCursor from "../components/Cursor";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopBtn";


interface NavItem {
  id: string;
  label?: string;
}

interface HomeProps {
  navItems?: NavItem[];
  projectsData?: Project[];
  experienceData?: ExperienceItem[];
  skillData?: SkillsData;
}

export default function HomeContainer({
  navItems,
  projectsData,
  experienceData,
  skillData,
}: HomeProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef<Record<SectionId, RefProp>>({
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 10);

      let currentSection: SectionId = "home";
      const sectionNames = Object.keys(sectionRefs.current) as SectionId[];
      for (const sectionName of sectionNames) {
        const section = sectionRefs.current[sectionName]?.current;
        if (section && scrollPosition >= section.offsetTop - 150) {
          currentSection = sectionName;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId in sectionRefs.current) {
      const key = sectionId as SectionId;
      sectionRefs.current[key]?.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CustomCursor />
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          navItems={navItems}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          showScrollTop={showScrollTop}
        />

        <main>
          <Hero refProp={sectionRefs.current.home} handleNavClick={handleNavClick} />
          <About refProp={sectionRefs.current.about} darkMode={darkMode} />
          <Skills
            refProp={sectionRefs.current.skills}
            darkMode={darkMode}
            skills={skillData ?? { frontend: [], backend: [], soft: [] }}
          />
          <Projects
            refProp={sectionRefs.current.projects}
            darkMode={darkMode}
            projects={projectsData ?? []}
          />
          <Experience
            refProp={sectionRefs.current.experience}
            darkMode={darkMode}
            experience={experienceData ?? []}
          />
          <Contact refProp={sectionRefs.current.contact} darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
        <ScrollToTopButton
          showScrollTop={showScrollTop}
          scrollToTop={scrollToTop}
        />

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out;
            animation-fill-mode: both;
          }
          @keyframes bounceUp {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15%);
            }
          }
        `}</style>
      </div>
    </>
  );
}
