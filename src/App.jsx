import React from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
