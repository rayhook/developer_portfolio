import "./App.css";
import { useState } from "react";
import MyIcon from "./assets/MyIcon";

function App() {
  const PROJECTS = [
    {
      project_name: "Recipe Builder",
      project_description:
        "Allows you to build a recipe oon react, add your favourite recipe and keep them organized.",
      project_technologies: "Full, React, Postgres",
    },
    {
      project_name: "Instar",
      project_description:
        "Similiar to instagram allows image uploading, sharing and liking photos",
      project_technologies: "Full stack, React, Python",
    },
    {
      project_name: "T3 Stack",
      project_description:
        "fundementally changed the frontend world and sold my business for $1bn within 1 month of coding",
      project_technologies: "Typescript, Prisma, Next",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [projects] = useState(PROJECTS);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={` ${isHovered ? "bg-orange-500" : "bg-slate-700"}`}>
      <div className="px-60 py-8 bg-slate-800 sticky top-0 left-0 flex justify-between align-middle bg-opacity-50 text-white backdrop-blur-md">
        <h1 className="text-2xl">Chris Movassagh</h1>
        <h1 className="text-2xl">About</h1>
      </div>
      <div className="px-24 max-w-7xl h-full mx-auto lg:px-0">
        <div className="flex flex-col">
          <div className="mt-36 px-6 lg:my-8 mx-4 text-4xl leading-normal lg:text-5xl lg:leading-relaxed  text-white ">
            <h1>
              I’m <span>Chris</span>, an interdisciplinary
              <br />
              <span>software engineer </span>focused
              <br /> on crafting meaningful <span>experiences</span>.
            </h1>
          </div>
          <div className="flex flex-col gap-12 my-24">
            <h2 className="mx-4 px-6 mt-6 text-2xl lg:text-3xl text-white font-semibold">
              Some of my works
            </h2>
            {projects.map((project) => {
              return (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="peer py-14 px-8 mx-8 border text-white rounded-lg transition duration-150 hover:py-20 hover:px-12 hover:mx-4 hover:text-black hover:bg-white hover:ease-in-out hover:duration-700"
                >
                  <h4 className="font-semibold text-xl lg:text-2xl uppercase">
                    {project.project_name}
                  </h4>
                  <p className="my-2">{project.project_description}</p>
                  <p className="uppercase">{project.project_technologies}</p>
                </div>
              );
            })}
          </div>
          <div className="mx-4 my-12 text-white">
            <h4 className="text-2xl ">Drop me a line</h4>
            <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-4 uppercase">
              <a
                href="mailto: chris.movassagh@gmail.com"
                className="flex group"
              >
                <MyIcon />
                <h4>Email</h4>
              </a>
              <a href="https://github.com/rayhook" className="flex group">
                <MyIcon />
                <h4>Github</h4>
              </a>
              <a
                href="https://www.linkedin.com/in/chris-movassagh/"
                className="flex group"
              >
                <MyIcon />
                <h4>LinkedIn</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 mt-4 bg-slate-800 text-white">
        All rights reserved 2023.
      </div>
    </div>
  );
}

export default App;
