import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Affan Showkat Hakak",
    gender: "male",
    organization: "Planetcast Media Services Limited",
    title: "Software Developer",
    email: "affanhakak@gmail.com",
    contact: "9419066995",
    residence: "Jammu & Kashmir, India",
  };
  return (
    <div>
      <SectionTitle title="Let's Connect" />
      <div className="flex">
        <h1 className="text-white">{"("}</h1>
      </div>
    </div>
  );
}

export default Contact;
