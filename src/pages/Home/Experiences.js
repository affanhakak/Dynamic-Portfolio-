import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="My Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div
          className="flex flex-col gap-10 border-l-2 
         border-[#135e4c82] w-1/3 sm:w-full 
         sm:flex-row "
        >
          {experiences.map((experience, index) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                      : "text-white"
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-white text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-white text-xl">
            {experiences[selectedItemIndex].techUsed}
          </h1>
          <p className="text-tertiary">{experiences[selectedItemIndex].desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
