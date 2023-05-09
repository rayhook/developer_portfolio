import { Link, Outlet } from "@tanstack/router";
import "./App.css";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${isHovered ? "bg-orange-500" : "bg-slate-700"}`}>
      <div className="max-w-7xl h-full mx-auto">
        <div className="flex flex-col">
          <div className="navbar flex justify-between bg-orange-200 my-12 mx-4">
            <h1 className="text-2xl ml-2">Chris Movassagh</h1>
            <h1 className="text-2xl mr-2">About</h1>
          </div>
          <div className="text-5xl text-white leading-relaxed  my-8 mx-4">
            <h1>
              I’m <span>Chris</span>, an interdisciplinary
              <br />
              <span>software engineer </span>focused
              <br /> on crafting meaningful <span>experiences</span>.
            </h1>
          </div>

          {/* TODO map over array of projects instead of manually adding */}
          <div className="flex flex-col gap-12">
            <h2 className="mx-4 mt-6 text-3xl text-white font-semibold">
              Some of my works
            </h2>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="py-14 px-8 mx-4 border text-white rounded-lg transition duration-150 hover:py-24 hover:px-14 hover:mx-4 hover:text-black hover:bg-white hover:ease-in-out hover:duration-700"
            >
              <h4 className="font-semibold text-2xl uppercase">Project name</h4>
              <p className="my-2">description on what the projects does</p>
              <p className="uppercase">front open source</p>
            </div>
            <div className="project-item border rounded-lg p-4 mx-4 hover:p-8">
              <h4 className="text-xl">project ABC</h4>
            </div>
            <div className="project-item border p-4 mx-4">
              <h4 className="text-xl">project ABC</h4>
              <p>description</p>
            </div>
            <div id="target" className="project-item border p-4 mx-4">
              <h4 className="text-xl">project ABC</h4>
              <p>description</p>
            </div>
          </div>
          <div className="mx-4 my-6">
            <h4 className="text-2xl">Drop me a line</h4>
            <div className="flex justify-between contact-me mt-4">
              <h4>Github</h4>
              <h4>Linked</h4>
              <h4>Email</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
