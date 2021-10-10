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
  container: {},
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Colin</title>
      </Helmet>

      <Container>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h1" paragraph style={{ fontWeight: 800 }}>
            Hi! I'm Colin.
          </Typography>
          <Typography variant="h5" paragraph style={{ fontWeight: 500 }}>
            I'm a programming student.
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
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
