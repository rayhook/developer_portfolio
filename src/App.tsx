import "./App.css";
import { Link, Outlet } from "@tanstack/router";

function App() {
  return (
    <div className="bg-orange-500">
      <div className="px-60 py-8 bg-slate-800 sticky top-0 left-0 flex justify-between align-middle bg-opacity-50 text-white backdrop-blur-md">
        <Link to="/">
          <h1 className="text-2xl">Chris Movassagh</h1>
        </Link>
        <Link to="/about">
          <h1 className="text-2xl">About</h1>
        </Link>
        <Link to="/filter">
          <h1 className="text-2xl">Filter</h1>
        </Link>
      </div>
      <Outlet />
      <div className="flex justify-center py-8 mt-4 bg-slate-800 text-white">
        All rights reserved 2023.
      </div>
    </div>
  );
}

export default App;
