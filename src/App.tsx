import { Link, Outlet } from "@tanstack/router";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <div className="pt-4 px-3 text-white">
        <div className="flex">
          <div className="text-7xl leading-relaxed">
            <h1>Hi, I am Name</h1>
            <h3>I'm a developer...</h3>
            <div
              className="flex flex-col
             text-4xl"
            >
              <Link className="hover:text-amber-500" to="/">
                Home
              </Link>
              <Link className="hover:text-amber-500" to="/about">
                About
              </Link>
            </div>
            <hr />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
