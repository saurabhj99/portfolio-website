import React from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
