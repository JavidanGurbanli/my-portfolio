import HomeContainer from "../containers/Home";
import {
  projectsData,
  experienceData,
  skillData,
  navItems,
} from "../data";

export default function Home() {
  return (
    <HomeContainer
      navItems={navItems}
      projectsData={projectsData}
      experienceData={experienceData}
      skillData={skillData}
    />
  );
}
