import React, { useEffect, useState } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  // Keep mode as a union type so the comparison is valid (even if we never change it).
  const [mode] = useState<"light" | "dark">("light");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      {/* Hide the theme toggle in Navigation; do NOT pass a toggle handler */}
      <Navigation parentToChild={{ mode, showThemeToggle: false }} />
      {/* If Navigation requires a prop named modeChange, pass a no-op:
          <Navigation parentToChild={{ mode, showThemeToggle: false }} modeChange={() => {}} />
      */}

      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
