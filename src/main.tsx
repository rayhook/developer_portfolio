import React from "react";
import ReactDOM from "react-dom/client";
import { RootRoute, Router, Route, RouterProvider } from "@tanstack/router";
import App from "./App";
import About from "./routes/About";
import Index from "./routes/Index";
import "./index.css";

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

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
