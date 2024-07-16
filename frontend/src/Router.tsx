import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import LodgingPage from "./pages/LodgingPage";
import LodgingDetails from "./pages/LodgingDetails";
import ActivitiesPage from "./pages/ActivitiesPage";
import PlacesPage from "./pages/PlacesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/places",
    element: <PlacesPage />,
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
    path: "/activities",
    element: <ActivitiesPage />,
  },
  {
    path: "/lodging/:name",
    element: <LodgingDetails />,
  },
]);
