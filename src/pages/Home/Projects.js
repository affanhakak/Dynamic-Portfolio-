import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div
          className="flex flex-col gap-10 border-l-2 
           border-[#135e4c82] w-1/3 sm:w-full 
           sm:flex-row overflow-x-scroll"
        >
          {projects.map((project, index) => {
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
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].img}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>

            <h1 className="text-white text-xl">
              {projects[selectedItemIndex].techUsed}
            </h1>
            <a
              href={projects[selectedItemIndex].link}
              className="clickable-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects[selectedItemIndex].link}
            </a>

            <p className="text-tertiary">{projects[selectedItemIndex].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
