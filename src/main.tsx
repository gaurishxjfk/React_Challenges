import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WaterBalancer from "./challenges/waterBalancer/WaterBalancer.js";
import Accordion from "./challenges/accordion/Accordion.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/water-balancer",
    element: <WaterBalancer />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

