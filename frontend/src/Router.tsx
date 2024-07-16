import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import LodgingPage from "./pages/LodgingPage";
import LodgingDetails from "./pages/LodgingDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/lodging",
    element: <LodgingPage />,
  },
  {
    path: "/lodging/:name",
    element: <LodgingDetails/>
  }
]);
