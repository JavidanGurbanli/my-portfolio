"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionLink from "./MotionLink";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
type SectionId = "home" | "about" | "skills" | "projects" | "experience" | "contact";

interface NavItem {
  id: string;
  label?: string;
}

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  navItems?: NavItem[] | string[];
  activeSection: string;
  handleNavClick: (sectionId: SectionId | string) => void;
  showScrollTop: boolean;
}

const Header = ({ darkMode, setDarkMode, navItems = [], activeSection, handleNavClick, showScrollTop }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    handleNavClick(sectionId);
    setMenuOpen(false);
  };

  return (
    <motion.nav initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${ showScrollTop ? (darkMode ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-white/80 backdrop-blur-lg shadow-lg") : "" }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Logo" width={150} height={40} className="w-28 h-auto md:w-36" />
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const label = typeof item === "string" ? item : (item.label ?? item.id);
              const id = typeof item === "string" ? item : (item.id);
              return (
                <MotionLink
                  key={id}
                  href={`#${id.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(id.toLowerCase()); }}
                  className={`cursor-pointer hover:text-blue-500 transition-colors duration-300 ${ activeSection === id.toLowerCase() ? "text-blue-500 font-semibold" : "" }`}
                >
                  {label}
                </MotionLink>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <MotionLink href="/files/Javidan-Gurbanli.pdf" className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </MotionLink>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-blue-500/20 transition-all duration-300 cursor-pointer">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-full hover:bg-blue-500/20">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={`md:hidden ${ darkMode ? "bg-gray-800" : "bg-white" } shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const label = typeof item === "string" ? item : (item.label ?? item.id);
              const id = typeof item === "string" ? item : (item.id);
              return (
                <a
                  key={id}
                  href={`#${id.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(id.toLowerCase()); }}
                  className={`block px-3 py-2 rounded-md transition-colors ${ activeSection === id.toLowerCase() ? "bg-blue-500/20 text-blue-500" : "hover:bg-blue-500/20" }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Header;