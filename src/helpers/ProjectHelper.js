import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "inline-flex",
  },
}));

const ProjectCard = ({ imageLink, title, description, type, link }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12} lg={6}>
      <Card variant="outlined" className={classes.card}>
        {imageLink ? (
          <CardMedia
            component="img"
            style={{
              objectPosition: "top right",
              height: "auto",
              width: "40%",
            }}
            image={process.env.PUBLIC_URL + imageLink}
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title={type === "Twitter" ? "X" : "Github Repo"}>
            <IconButton
              size="small"
              color="inherit"
              edge="end"
              style={{ alignSelf: "flex-end" }}
              href={link}
              target="_blank"
            >
              {type === "Twitter" ? (
                <XIcon fontSize="large" />
              ) : (
                <GitHubIcon fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};

export const generateProjectCards = (projects) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={3}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageLink={project.imageLink}
          title={project.title}
          description={project.description}
          type={project.type}
          link={project.link}
        />
      ))}
    </Grid>
  );
};
