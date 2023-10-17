import React from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css"
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
