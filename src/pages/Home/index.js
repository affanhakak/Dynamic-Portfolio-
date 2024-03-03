import React from "react";
import Header from "../../components/header";
import Intro from "../../pages/Home/Intro";
import About from "../../pages/Home/About";
import Experiences from "../../pages/Home/Experiences";
import Projects from "../../pages/Home/Projects";
import Contact from "../../pages/Home/Contact";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
