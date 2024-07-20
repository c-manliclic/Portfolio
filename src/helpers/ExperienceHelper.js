import {
  Typography,
  Card,
  Grid,
  CardContent,
  List,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    "& .MuiListItem-root": {
      display: "list-item",
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
}));

const ExperienceCard = ({ title, organization, details }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12} lg={6}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1">
            {organization}
          </Typography>
          {details && (
            <List className={classes.list}>
              {details.map((item, index) => (
                <ListItem variant="body1" color="textPrimary" key={index}>
                  {item}
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export const generateExperienceCards = (experiences) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={3}
    >
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          organization={experience.organization}
          details={experience.details}
        />
      ))}
    </Grid>
  );
};
