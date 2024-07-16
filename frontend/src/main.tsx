import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/custom.css";
import "./styles/output.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057FF",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
