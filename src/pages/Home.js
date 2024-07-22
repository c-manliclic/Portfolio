import { Helmet } from "react-helmet";
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Anime from "react-anime";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 50,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Colin</title>
      </Helmet>

      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"2em"} delay={(e, i) => i * 750}>
          <Typography variant="h1" paragraph>
            Hi, I'm Colin!
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a software developer who is knowledgeable in both front and
            back-end languages and tools. I am proficient in object-oriented,
            software, client/server, and database development.
          </Typography>
          <Typography variant="body1" paragraph>
            Programming is constantly evolving and changing, so I believe my
            most significant strength is learning and making myself comfortable
            with new technologies. I also prioritize a team's success rather
            than the individual because high morale can result in incredible
            innovations.
          </Typography>
          <Typography variant="body1" paragraph>
            My portfolio showcases the skills I have learned over the years. As
            well as awards, experiences, and projects.
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome 😊
          </Typography>
          <Grid container direction="row" alignItems="center">
            <Tooltip title="Github">
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
            <Tooltip title="LinkedIn">
              <IconButton
                size="small"
                color="inherit"
                edge="start"
                href="https://www.linkedin.com/in/colinmanliclic/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="E-mail">
              <IconButton
                size="small"
                color="inherit"
                edge="start"
                href="mailto:colinmanliclic@gmail.com"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Anime>
      </Container>
    </>
  );
}
