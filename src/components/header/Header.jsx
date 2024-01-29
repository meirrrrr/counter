import { useState } from "react";
import AboutSection from "..//main/AboutSection.jsx";
import CafesSection from "../main/CafesSection.jsx";
import MasjidSection from "..//main/MasjidsSection.jsx";
import NavBar from "./NavBar.jsx";

export default function Header(props) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
    console.log(`button clicked ${componentName}`);
  };

  return (
    <header>
      <div className="header-title">
        <img src={props.link} alt="logo" width="50px" />
        <h1>title</h1>
      </div>
      <NavBar handleClick={handleButtonClick} />
      {selectedComponent === "about" && <AboutSection />}
      {selectedComponent === "cafes" && <CafesSection />}
      {selectedComponent === "masjids" && <MasjidSection />}
    </header>
  );
}
