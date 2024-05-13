import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./routes/home";
import Events from "./routes/events";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/ChoctawIndianFair/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ChoctawIndianFair/",
        element: <Home />,
      },
      {
        path: "/ChoctawIndianFair/events",
        element: <Events />,
      },
      {
        path: "/ChoctawIndianFair/culture",
        element: <h2>Culture</h2>,
      },
      {
        path: "/ChoctawIndianFair/family",
        element: <h2>Family Fun</h2>,
      },
      {
        path: "/ChoctawIndianFair/stickball",
        element: <h2>Stickball</h2>,
      },
      {
        path: "/ChoctawIndianFair/pageant",
        element: <h2>Pageant</h2>,
      },
      {
        path: "/ChoctawIndianFair/competitions",
        element: <h2>Competitions</h2>,
      },
      {
        path: "/ChoctawIndianFair/map",
        element: <h2>Map</h2>,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
