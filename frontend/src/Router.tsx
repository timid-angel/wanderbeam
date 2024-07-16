import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LodgingPage from "./pages/LodgingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/lodging",
    element: <LodgingPage/>
  }
]);
