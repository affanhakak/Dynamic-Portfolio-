import React from "react";
import Header from "../../components/header";
import Intro from "../../pages/Home/Intro";
import About from "../../pages/Home/About";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
      </div>
    </div>
  );
}

export default Home;
