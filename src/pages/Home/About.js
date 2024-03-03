import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "Angular",
    "React",
    "Node",
    "Express",
    "MongoDB",
  ];
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex items-center w-full sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/46c57c8b-de6d-46a4-aabc-9ec2060a3f12/tovHEIDKKR.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            I like to write web content and share it on GitHub and other
            platforms. For me, there is delight in coding. My passion has
            inspired me to learn more about databases and backend development,
            even though I started out as a UI developer.
          </p>
          <p className="text-white">
            Other than programming, we can have a cup of coffee and discuss
            about Football, Comic books, Marvels and Game Of Thrones. We can
            connect on linkedin or whatsapp.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-white text-xl">
          The tech stack that I am currently working on personally or
          professionally
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
