import { Helmet } from "react-helmet";
import {
  Container,
  Typography,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Anime from "react-anime";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "transparent",
  },
  container: {
    paddingBottom: 75,
  },
  grid: {
    marginBottom: 25,
  },
}));

export default function Experience() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Experience | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h3" paragraph style={{ fontWeight: 800 }}>
            Experience
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={1}
          >
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Computer Programmer Analyst (4.08 GPA - President's Honour
                    Roll)
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College (Ontario College Advanced Diploma)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Software Developer (Co-op)
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Apparatus Global Solutions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Peer Mentor
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Dean's Honour Roll 2018
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Dean's Honour Roll 2019
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Dean's Honour Roll 2020
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Dean's Honour Roll 2021
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    Fanshawe College
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Anime>
      </Container>
    </>
  );
}
