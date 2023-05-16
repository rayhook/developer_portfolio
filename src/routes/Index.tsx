import { useState } from "react";
import MyIcon from "../assets/MyIcon";

function Index() {
  const PROJECTS = [
    {
      project_name: "Messenger App",
      project_description:
        "A fullstack messenger app. Allows real-time chat and ability to send mutiple photos between users",
      project_technologies: "React, Express, Postgres, Redux",
      deplyed_url: "https://github.com/rayhook/messenger-6877",
    },
    {
      project_name: "Instaframe",
      project_description:
        "A clone of instagram. Features includes uploading photos,posting comments and liking",
      project_technologies: "React, Express, MongoDB",
      deplyed_url: "https://rayhook-insta-clone.netlify.app/",
    },
    {
      project_name: "Recipe Builder",
      project_description:
        'A light and fast recipes builder app. Create recipes, find recipes by name or other filters or add recipes to your "favorite" or "want to try list"',
      project_technologies: "React, Express",
      deplyed_url: "https://rayhook-recipe-builder.netlify.app/",
    },
  ];
  const [projects] = useState(PROJECTS);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
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
                <a
                  href={project.deplyed_url}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="peer py-14 px-8 mx-8 border text-white rounded-lg transition duration-150 hover:py-20 hover:px-12 hover:mx-4 hover:text-black hover:bg-white hover:ease-in-out hover:duration-700"
                >
                  <h4 className="font-semibold text-xl lg:text-2xl uppercase">
                    {project.project_name}
                  </h4>
                  <p className="my-2">{project.project_description}</p>
                  <p className="uppercase">{project.project_technologies}</p>
                </a>
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
    </>
  );
}

export default Index;
