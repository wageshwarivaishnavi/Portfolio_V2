import React from "react";
import ProjectCard from "./ProjectCard";
import Anime from "../../assets/Anime.png";
import Posts from "../../assets/Posts.png";
import Survey from "../../assets/Survey.png";

const Projects = () => {
  const siteURL = {
    kalkani: "https://wageshwarivaishnavi.github.io/kalkani/",
    addToDoList: "https://wageshwarivaishnavi.github.io/listofitems/",
    SurveyDemo:
      "https://github.com/wageshwarivaishnavi/survey/tree/master/Front-End",
  };

  return (
    <div
      id="Projects"
      className="p-10 md:p-20 text-white bg-black shadow-xl  mx-0 md:mx-20 md:my-20 bg-opacity-30 rounded-lg"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-10 flex flex-wrap gap-5 justify-between">
        <ProjectCard
          title="Anime Character Finder - React, Redux, Material-UI"
          main=" Allows users to search for anime shows and view
detailed character information."
          url={siteURL.kalkani}
          projectImage={Anime}
          sourceCode={
            "https://github.com/wageshwarivaishnavi/kalkani/tree/master"
          }
        />
        <ProjectCard
          title="Survey Form - React, Redux, Material-UI, CSS"
          main=" Allows to create a Survey Form for customer"
          url={siteURL.SurveyDemo}
          projectImage={Survey}
          sourceCode={
            "https://github.com/wageshwarivaishnavi/survey/tree/master/Front-End"
          }
        />
        <ProjectCard
          title="Posts List - React, Javascript, Material-UI"
          main="Built a user-friendly post management system with sorting, search, and pagination"
          url={siteURL.addToDoList}
          projectImage={Posts}
          sourceCode={
            "https://github.com/wageshwarivaishnavi/listofitems/tree/master/src"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
