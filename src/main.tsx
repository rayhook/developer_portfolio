import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./routes/About.tsx";

import "./index.css";
import { RootRoute, Router, Route, RouterProvider } from "@tanstack/router";
import Index from "./routes/index.tsx";

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
  component: () => <About />,
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
