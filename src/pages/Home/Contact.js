import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Affan Showkat Hakak",
    gender: "Male",
    organization: "Planetcast Media Services Limited",
    title: "Software Developer",
    email: "affanhakak@gmail.com",
    contact: "9419066995",
    residence: "Jammu & Kashmir, India",
  };
  return (
    <div>
      <SectionTitle title="Let's Connect" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => {
            return (
              <div>
                <h1 className="ml-5 ">
                  <span className="text-white">{key}:</span> &nbsp;
                  <span className="text-tertiary">{user[key]}</span>
                </h1>
                ;
              </div>
            );
          })}
          <h1 className="text-white">{"}"}</h1>;
        </div>
        <div className="h-[400px] w-1/2">
          <img src="/images/affan-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
