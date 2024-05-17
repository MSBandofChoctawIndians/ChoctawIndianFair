import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./routes/home";
import Events from "./routes/Events";
import ErrorPage from "./error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/ChoctawIndianFair/"
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route path="/ChoctawIndianFair/" element={<Home />} />
      <Route path="/ChoctawIndianFair/events" element={<Events />} />
      <Route path="/ChoctawIndianFair/culture" element={<h2>Culture</h2>} />
      <Route path="/ChoctawIndianFair/family" element={<h2>Family Fun</h2>} />
      <Route path="/ChoctawIndianFair/stickball" element={<h2>Stickball</h2>} />
      <Route path="/ChoctawIndianFair/pageant" element={<h2>Pageant</h2>} />
      <Route
        path="/ChoctawIndianFair/competitions"
        element={<h2>Competitions</h2>}
      />
      <Route path="/ChoctawIndianFair/map" element={<h2>Map</h2>} />
    </Route>,
  ),
);

// @ts-expect-error - This is a root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
