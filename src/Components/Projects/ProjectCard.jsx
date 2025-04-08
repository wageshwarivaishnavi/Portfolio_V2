import React from "react";

const ProjectCard = ({ title, main, url, projectImage, sourceCode }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 md:w-96 lg:w-[500px] xl:w-[600px]  bg-[#10194e] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={projectImage} alt=""></img>
      <h3 className="px-4 text-xl md:text-xl font-bold leading-normal ">
        {title}
      </h3>
      <br />
      <p className="px-4 text-lg md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          <a href={url} target="blank">
            Visit Project
          </a>
        </button>
        <button
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          <a href={sourceCode} target="blank">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
