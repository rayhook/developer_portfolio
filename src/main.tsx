import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Index from "./components/Index.tsx";
import About from "./components/About.tsx";
import "./index.css";
import { RootRoute, Router, Route, RouterProvider } from "@tanstack/router";

// Create a root route
let rootRoute = new RootRoute({
  component: App,
});

// Create an about route
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "about",
});

const routeTree = rootRoute.addChildren([aboutRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
