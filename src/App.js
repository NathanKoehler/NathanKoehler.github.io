import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./_components/Navbar";
import "./App.css";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import AnimatedRoutes from "./_components/AnimatedRoutes";

/**
 * custom theme that dictates all component styling
 */
 const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2d72c2",
      highlighted: "#155f8f",
      held: "#9fd2f5",
    },
    secondary: {
      main: "#f50057",
    },
    white: {
      main: "#ffffff",
      lightgray: "#8a8a8a",
      darkgray: "#4a4a4a",
      opposite: "#000000",
    },
    background: {
      default: "#ffffff",
      main: "#eeeeee",
      highlighted: "#edf8ff",
      dark: "#000000",
      navbar_opaque: "rgba(238, 238, 238, 1)",
      navbar_transparent: "rgba(0, 0, 0, 0.2)",

    },
    text: {
      primary: "rgba(0, 0, 0, 0.77)",
      secondary: "rgba(0, 0, 0, 0.57)",
      transparent: "rgba(0, 0, 0, 0.37)",
      highlighted: "#78e3df",
    },
    icon: {
      blue1: "#6ac3cc",
      blue2: "#78e3df",
      blue3: "#c7f5f5",
    }
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h4" },
          style: {
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Comfortaa",
            margin: 0,
            padding: 0,
          },
        }
      ]
    },
    MuiCheckbox: {
      variants: [
        {
          props: { variant: "default" },
          style: {
            "&.Mui-checked": {
              color: "#155f8f",
            },
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "payments" },
          style: {
            border: "1px solid #bbbbbb",
            color: "#6e6e6e",
            transition: "150ms ease-in-out",
            "&:hover": {
              borderColor: "#0d72bf",
              backgroundColor: "#f7fdff",
              color: "#0d72bf",
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "quantity" },
          style: {
            border: "1px solid",
            color: "#155f8f",
            "&:hover": {
              backgroundColor: "#fafdff",
              color: "#0e4d75",
            },
          },
        },
        {
          props: { variant: "circle" },
          style: {
            display: "inline-flex",
            backgroundColor: "rgb(221, 221, 221)",
            borderRadius: "50%",
            height: "2rem",
            width: "2rem",
            minWidth: "0%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          },
        },
        {
          props: { variant: "highlighted" },
          style: {
            border: "1px solid",
            color: "#155f8f",
            backgroundColor: "#edf8ff",
            "&:hover": {
              backgroundColor: "#fafdff",
              color: "#0e4d75",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid #bbbbbb",
            color: "#6e6e6e",
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#edf8ff",
              color: "#155f8f",
            },
          },
        },
        {
          props: { variant: "blue_outlined" },
          style: {
            border: "1px solid #2d72c2",
            color: "#2d72c2",
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#edf8ff",
              color: "#2d72c2",
            },
          },
        },
        {
          props: { variant: "unchecked" },
          style: {
            border: "1px solid transparent",
            backgroundColor: "#eeeeee",
            "&:hover": {
              backgroundColor: "#b4cfe0",
              color: "#0e4d75",
            },
          },
        },
        {
          props: { variant: "landing" },
          style: {
            border: "1px solid #54b948",
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxShadow: "0px 1px 8px 0px rgba(255, 255, 255, 0.6)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              color: "#ffffff",
            },
            "&:disabled": {
              border: "1px solid transparent",
              color: "rgba(255,255, 255, 0.5)",
            }
          },
        },
      ],
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
    </ThemeProvider>
  );
}

export default App;
