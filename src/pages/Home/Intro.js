import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">Hey there, I am</h1>
      <h1 className="text-tertiary text-7xl font-semibold">
        Shubham Tiwari
      </h1>
      <h1 className="text-white text-5xl font-semibold">
        I am a Fullstack Software Engineer
      </h1>
      <h1 className="text-white w-2/3">
        I am a Fullstack developer. My tech stack includes Angular, c#,
        .net, MySQL and RestAPI's. I am passionate about web development.
      </h1>
      <button className="border-2 border-secondary text-secondary px-10 py-3 secondary">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
