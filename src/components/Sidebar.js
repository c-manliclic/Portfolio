import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons//Build";
import GradeIcon from "@material-ui/icons/Grade";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Backdrop,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const items = [
  {
    href: "/skills",
    icon: <BuildIcon />,
    title: "Skills",
  },
  {
    href: "/experience",
    icon: <GradeIcon />,
    title: "Experience",
  },
  {
    href: "/projects",
    icon: <CodeIcon />,
    title: "Projects",
  },
];

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerText: {
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  backdrop: { zIndex: theme.zIndex.drawer + 1, left: "239px" },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    padding: 15,
    opacity: 0.5,
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();

  const handleDrawerClose = () => {
    props.toggleSidebar(false);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map((item) => (
            <ListItem
              className={classes.listItem}
              component={Link}
              button
              key={item.title}
              to={item.href}
              onClick={handleDrawerClose}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.drawerText }}
                primary={item.title}
              />
            </ListItem>
          ))}
        </List>
        <div className={classes.bottomPush}>
          <Typography variant="caption" color="textPrimary" component="p">
            © 2021 - Colin Manliclic
          </Typography>
        </div>
      </Drawer>
      <Backdrop
        className={classes.backdrop}
        open={props.open}
        onClick={handleDrawerClose}
      ></Backdrop>
    </>
  );
}
