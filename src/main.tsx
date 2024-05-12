import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Events from "./routes/events";

const router = createBrowserRouter([
  {
    path: "/ChoctawIndianFair/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ChoctawIndianFair/",
        element: <h2>Home</h2>,
      },
      {
        path: "/ChoctawIndianFair/events",
        element: <Events />,
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
