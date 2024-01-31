import { useState } from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import AboutSection from "./components/main/AboutSection";
import CounterSection from "./components/main/CounterSection";
import CafesSection from "./components/main/CafesSection";
import "./index.css";

function App() {
  const [tab, setTab] = useState("about");

  return (
    <>
      <Header active={tab} onChange={(current) => setTab(current)} />

      {tab === "about" && (
        <>
          <AboutSection />
        </>
      )}

      {tab === "counter" && (
        <>
          <CounterSection />
        </>
      )}

      {tab === "cafes" && (
        <>
          <CafesSection />
        </>
      )}
    </>
  );
}

export default App;
