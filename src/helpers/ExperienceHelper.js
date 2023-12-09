import { Typography, Card, Grid, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
}));

const ExperienceCard = ({ title, organization }) => {
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
      spacing={4}
    >
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          organization={experience.organization}
        />
      ))}
    </Grid>
  );
};
