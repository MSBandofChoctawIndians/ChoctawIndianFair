import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./routes/layout";
import Home from "./routes/Home_";
import Events from "./routes/Events";
import ErrorPage from "./error-page";
import Culture from "./routes/Culture";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/ChoctawIndianFair/"
      element={<Layout />}
      errorElement={<ErrorPage />}
    >
      <Route path="/ChoctawIndianFair/" element={<Home />} />
      <Route path="/ChoctawIndianFair/events" element={<Events />} />
      <Route path="/ChoctawIndianFair/culture" element={<Culture />} />
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

// @ts-expect-error createRoot is not yet typed
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
