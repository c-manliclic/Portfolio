import { Helmet } from "react-helmet";
import {
  Container,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Anime from "react-anime";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    backgroundColor: "transparent",
  },
  container: {
    paddingBottom: 75,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Projects | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h3" paragraph style={{ fontWeight: 800 }}>
            Projects
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardContent}>
                <CardMedia
                  component="img"
                  height="175"
                  image="assets\images\art.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Digital Art (Processing)
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    These are digital art pieces created by me by using the
                    programming tool Processing (similar to Java). I like to
                    explore all types of coding, even creative coding, where the
                    goal is to create something expressive than functional. I
                    upload all my pieces to my personal art Twitter account.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Twitter">
                    <IconButton
                      size="small"
                      color="inherit"
                      edge="start"
                      href="https://twitter.com/lawyu3"
                      target="_blank"
                    >
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardContent}>
                <CardMedia
                  component="img"
                  height="175"
                  image="\assets\images\expressionTreeEval.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Expression Tree Evaluator (INFO5101 C# Advanced Topics
                    Project)
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    C# program reads a CSV file filled with infix notation
                    expressions which are then converted into postfix and
                    finally prefix notation using expression trees.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Github Repo">
                    <IconButton
                      size="small"
                      color="inherit"
                      edge="start"
                      href="https://github.com/AnthonyJM18/ExpressionTreeEvaluator"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardContent}>
                <CardMedia
                  component="img"
                  height="175"
                  image="\assets\images\rideTheBus.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ride The Bus Multiplayer Game (INFO5060 Component-based
                    Programming with .NET Project)
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Ride The Bus card game application built on C# . It utilizes
                    that Windows Communication Foundation framework to simulate
                    a LAN computing environment for multiplayer.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Github Repo">
                    <IconButton
                      size="small"
                      color="inherit"
                      edge="start"
                      href="https://github.com/c-manliclic/INFO5060_Project2"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardContent}>
                <CardMedia
                  component="img"
                  height="175"
                  image="\assets\images\sprintCompass.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    SprintCompass (INFO3112 Managing Software Projects Applied 1
                    Project)
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Project management application similar to Clickup.
                    Functionality includes creating users, login functionality,
                    and sprint creation and management. It is built on C# and
                    uses Window Forms for its GUI.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Github Repo">
                    <IconButton
                      size="small"
                      color="inherit"
                      edge="start"
                      href="https://github.com/AnthonyJM18/SprintCompass"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardContent}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Portfolio Website
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Portfolio website built on React. It uses external tools
                    such as tsParticles, react-anime, react-helmet,
                    react-router, Material UI and Github Pages.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Github Repo">
                    <IconButton
                      size="small"
                      color="inherit"
                      edge="start"
                      href="https://github.com/c-manliclic"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Anime>
      </Container>
    </>
  );
}
