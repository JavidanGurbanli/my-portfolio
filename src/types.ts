import { RefObject } from "react";

export type SectionId = "home" | "about" | "skills" | "projects" | "experience" | "contact";

export interface NavItem {
  id: string;
  label?: string;
}

export interface Project {
  imgUrl: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface SkillsData {
  frontend: string[];
  backend: string[];
  soft: string[];
}

export type RefProp = RefObject<HTMLElement | null>;
