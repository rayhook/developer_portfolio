import { Link, Outlet } from "@tanstack/router";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-600">
      <div className="max-w-7xl bg-pink-400 h-full mx-auto">
        <div className="flex flex-col">
          <div className="navbar flex justify-between bg-orange-200 mt-10 mx-4">
            <h1 className="text-2xl ml-4">Lucas Portet</h1>
            <h1 className="text-2xl mr-4">About</h1>
          </div>
          <div className="text-5xl leading-relaxed bg-blue-200 m-4">
            <h1>
              I’m <strong>Chris</strong>, an interdisciplinary
              <br />
              <strong>software engineer </strong>focused
              <br /> on crafting meaningful <strong>experiences</strong>.
            </h1>
          </div>

          {/* TODO map over array of projects instead of manually adding */}
          <div className="projects flex flex-col gap-12">
            <h2 className="text-3xl m-4">some of my works</h2>
            <div className="project-item border p-4 mx-4 hover:p-8">
              <h4 className="">project ABC</h4>
              <p>description</p>
            </div>
            <div className="project-item border p-4 mx-4">
              <h4 className="text-xl">project ABC</h4>
              <p>description</p>
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
