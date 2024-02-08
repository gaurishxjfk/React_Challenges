import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WaterBalancer from "./challenges/waterBalancer/WaterBalancer.js";
import Accordion from "./challenges/accordion/Accordion.js";
import Searchbar from "./challenges/ChipComponent/Searchbar.js";

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
  {
    path: "/searchbar",
    element: <Searchbar />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

