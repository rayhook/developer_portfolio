import { Link, Outlet } from "@tanstack/router";
import "./App.css";
import { useState } from "react";
import MyIcon from "./assets/MyIcon";

function App() {
  const PROJECTS = [
    {
      project_name: "Amazing React project",
      project_description:
        "fundementally changed the frontend world and sold my business for $1bn within 1 month of coding",
      project_technologies: "Front, open source, React",
    },
    {
      project_name: "Vue project",
      project_description: "So many request to make a monolith so I did it",
      project_technologies: "Full stack, Vue Postgress, Typescript, Python",
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
    <div
      className={` ease-in-out ${isHovered ? "bg-orange-500" : "bg-slate-700"}`}
    >
      <div className="max-w-7xl h-full mx-auto">
        <div className="flex flex-col">
          <div className="py-6 bg-slate-800 sticky top-0 left-0 w-full right-0 bg-opacity-50 text-white backdrop-blur-md">
            <div className="mx-4 flex justify-between">
              <h1 className="text-2xl ml-2">Chris Movassagh</h1>
              <h1 className="text-2xl mr-2">About</h1>
            </div>
          </div>
          <div className="text-5xl text-white leading-relaxed my-8 mx-4">
            <h1 className="">
              I’m <span>Chris</span>, an interdisciplinary
              <br />
              <span>software engineer </span>focused
              <br /> on crafting meaningful <span>experiences</span>.
            </h1>
          </div>
          <div className="flex flex-col gap-12 my-24">
            <h2 className="mx-4 mt-6 text-3xl text-white font-semibold">
              Some of my works
            </h2>
            {projects.map((project) => {
              return (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="peer py-14 px-8 mx-4 border text-white rounded-lg transition duration-150 hover:py-20 hover:px-12 hover:mx-4 hover:text-black hover:bg-white hover:ease-in-out hover:duration-700"
                >
                  <h4 className="font-semibold text-2xl uppercase">
                    {project.project_name}
                  </h4>
                  <p className="my-2">{project.project_description}</p>
                  <p className="uppercase">{project.project_technologies}</p>
                </div>
              );
            })}
          </div>
          <div className="mx-4 my-12 text-white">
            <h4 className="text-2xl">Drop me a line</h4>
            <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-4 uppercase hover:">
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>Twitter</h4>
              </div>
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>Email</h4>
              </div>
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>LinkedIn</h4>
              </div>
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>Codepen</h4>
              </div>
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>Github</h4>
              </div>
              <div className="flex group">
                <MyIcon className="hidden w-6 h-6 mr-4 group-hover:block" />
                <h4>Stack</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-8 mt-8 bg-slate-800 text-white">
            Take me to the good vibes
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
