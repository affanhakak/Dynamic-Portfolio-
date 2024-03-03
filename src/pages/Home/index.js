import React from "react";
import Header from "../../components/header";
import Intro from "../../pages/Home/Intro";
import About from "../../pages/Home/About";
import Experiences from "../../pages/Home/Experiences";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
      </div>
    </div>
  );
}

export default Home;
