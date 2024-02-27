import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex items-center w-full">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/46c57c8b-de6d-46a4-aabc-9ec2060a3f12/tovHEIDKKR.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            I enjoy creating things on the web and upload them on a free source
            platform like github. I aim to create a bootstrap like library of my
            own and make it free for everyone. Coding is something that I
            absolutely enjoy. I started as a UI developer and eventually due to
            my enthusiasm and love for the thing, I started learning backend and
            database as well.
          </p>
          <p className="text-white">
            Other than programming, we can have a cup of coffee and discuss
            about Football, Comic books, Marvels and Game Of Thrones. We can
            connect on linkedin or whatsapp
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
