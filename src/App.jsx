import React from "react";
import style from "./app.module.css"
import { Home } from "./Components/home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/about/About";
import Experience from "./Components/expirence/experience";
import { Project } from "./Components/projects/Projects";
import { Contact } from "./Components/contact/Contact";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}
export default App