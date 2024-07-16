import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LodgingPage from "./pages/LodgingPage";
import ActivitiesPage from "./pages/ActivitiesPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/lodging",
    element: <LodgingPage/>
  },
  {
    path:"/activities",
    element:<ActivitiesPage/>
  }
]);
