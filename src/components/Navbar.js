import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  titleText: {
    fontSize: "1.25rem",
    fontWeight: 900,
    textTransform: "none",
    left: "10px",
  },
  titleContainer: {
    flex: 1,
    textAlign: "left",
    paddingLeft: "16px",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    setTheme(window.localStorage.getItem("theme"));
    props.theme(window.localStorage.getItem("theme"));
  });

  const handleDrawerOpen = () => {
    props.toggleSidebar(true);
  };

  const handleDrawerClose = () => {
    props.toggleSidebar(false);
  };

  const handleDarkMode = () => {
    window.localStorage.setItem("theme", "dark");
    setTheme("dark");
    props.theme("dark");
  };

  const handleLightMode = () => {
    window.localStorage.setItem("theme", "light");
    setTheme("light");
    props.theme("light");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={true}>
        <div className={classes.titleContainer}>
          <IconButton
            aria-label="open drawer"
            onClick={
              props.openSidebar === false ? handleDrawerOpen : handleDrawerClose
            }
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title="That's me!">
            <Button
              onClick={handleDrawerClose}
              {...{
                to: "/portfolio",
                component: Link,
                className: classes.titleText,
              }}
            >
              Colin
            </Button>
          </Tooltip>
        </div>
        <Tooltip title={theme === "light" ? "Dark Mode" : "Light Mode"}>
          <IconButton
            className={classes.themeButton}
            aria-label="theme mode"
            onClick={theme === "light" ? handleDarkMode : handleLightMode}
          >
            {theme === "light" ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
