import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
 
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const {projects} = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col sm:py-0">
        <div className="flex flex-col gap-10 border-l-2 border-[#5e5143] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full sm:text-xs sm:gap-2 ">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h6
                className={`text-xl px-5 -ml-[3px] bg-[#8edbc807] py-3 sm:text-xs  ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary rounded border-l-4 sm:w-full"
                    : "text-white"
                }`}
              >
                {project.title}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72"/>
          <div className="flex flex-col gap-5   w-2/3">
            <h6 className="text-secondary text-xl py-3 sm:py-0">
              {projects[selectedItemIndex].title}
            </h6>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white mt-10 sm:-mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
