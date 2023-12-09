import { Helmet } from "react-helmet";
import { Container, Typography } from "@material-ui/core";
import Anime from "react-anime";
import { makeStyles } from "@material-ui/core/styles";
import { generateProjectCards } from "../helpers/ProjectHelper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 50,
  },
}));

const ProjectList = () => {
  const projects = [
    {
      imageLink: "/assets/images/art.jpg",
      title: "Digital Art (Processing)",
      description:
        "These are digital art pieces created by me by using the programming tool Processing (similar to Java). I like to explore all types of coding, even creative coding, where the goal is to create something expressive than functional. I upload all my pieces to my personal art Twitter account.",
      type: "Twitter",
      link: "https://twitter.com/lawyu3",
    },
    {
      imageLink: "/assets/images/expressionTreeEval.jpg",
      title: "Expression Tree Evaluator (INFO5101 C# Advanced Topics Project)",
      description:
        "C# program reads a CSV file filled with infix notation expressions which are then converted into postfix and finally prefix notation using expression trees.",
      type: "GitHub Repo",
      link: "https://github.com/AnthonyJM18/ExpressionTreeEvaluator",
    },
    {
      imageLink: "/assets/images/rideTheBus.jpg",
      title:
        "Ride The Bus Multiplayer Game (INFO5060 Component-based Programming with .NET Project)",
      description:
        "Ride The Bus card game application built on C# . It utilizes that Windows Communication Foundation framework to simulate a LAN computing environment for multiplayer.",
      type: "GitHub Repo",
      link: "https://github.com/c-manliclic/INFO5060_Project2",
    },
    {
      title: "Portfolio Website",
      description:
        "Portfolio website built on React. It uses external tools such as tsParticles, react-anime, react-helmet, react-router, Material UI, and Github Pages.",
      type: "GitHub Repo",
      link: "https://github.com/c-manliclic/c-manliclic.github.io",
    },
  ];

  return generateProjectCards(projects);
};

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Projects | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h3" paragraph>
            Projects
          </Typography>
          <ProjectList></ProjectList>
        </Anime>
      </Container>
    </>
  );
}
