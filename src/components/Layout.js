import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Particles from "react-tsparticles";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "../theme";
import GlobalStyles from "./GlobalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Layout() {
  const [sidebar, setSideBar] = React.useState(false);
  const [theme, setTheme] = React.useState(darkTheme);

  const handleSidebar = (data) => {
    setSideBar(data);
  };

  const handleTheme = (data) => {
    data === "light" ? setTheme(lightTheme) : setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={{ ...theme }}>
      <CssBaseline />
      <GlobalStyles />
      <Navbar
        openSidebar={sidebar}
        toggleSidebar={handleSidebar}
        theme={handleTheme}
      ></Navbar>
      <Sidebar open={sidebar} toggleSidebar={handleSidebar}></Sidebar>
      <Particles
        id="tsparticles"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme === lightTheme ? "#000" : "#FFF",
            },
            links: {
              color: theme === lightTheme ? "#000" : "#FFF",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 0.3,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 10,
              },
              value: 1,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "line",
            },
            size: {
              random: false,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Toolbar />
      <Outlet />
    </ThemeProvider>
  );
}
