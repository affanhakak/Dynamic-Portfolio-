import React from "react";

function Intro() {
  const redirectToMDN = () => {
    window.location.href = "https://developer.mozilla.org/";
  };
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">Hey there, I am</h1>
      <h1 className="text-secondary text-7xl sm:text-3xl font-semibold">
        Affan Showkat Hakak
      </h1>
      <h1 className="text-white text-6xl sm:text-3xl font-semibold">
        I am a Fullstack Software Engineer
      </h1>
      <h1 className="text-tertiary w-2/3">
        I am a Fullstack developer. My tech stack includes Angular, React, Node,
        MongoDB and Express. I am passionate about web development.
      </h1>
      <button
        className="border-2 border-tertiary text-tertiary px-10 py-3 secondary"
        onClick={redirectToMDN}
      >
        Get Started
      </button>
    </div>
  );
}

export default Intro;
