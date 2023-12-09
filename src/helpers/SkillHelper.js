import { Typography, Card, Grid, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
}));

const SkillCard = ({ skillName, yearsOfExperience }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            {skillName}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1">
            {yearsOfExperience}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const generateSkillCards = (skills) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={1}
      style={{ marginBottom: "20px" }}
    >
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          skillName={skill.name}
          yearsOfExperience={skill.yearsOfExperience}
        />
      ))}
    </Grid>
  );
};
