import React from "react";
import ReactDOM from "react-dom/client";
import { RootRoute, Router, Route, RouterProvider } from "@tanstack/router";
import App from "./App.tsx";
import About from "./routes/About.tsx";
import Index from "./routes/Index.tsx";
import Filter from "./routes/Filter.tsx";
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

const filterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "filter",
  component: Filter,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, filterRoute]);

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
