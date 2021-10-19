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

export default function Skills() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Skills | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h3" paragraph style={{ fontWeight: 800 }}>
            Skills
          </Typography>

          <Grid
            className={classes.grid}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h4" paragraph style={{ fontWeight: 800 }}>
                Front End
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    HTML
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    CSS
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Javascript
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    jQuery
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    React
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Vue
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Material UI
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Bootstrap
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Material Design
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    DevExpress
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Angular
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Typescript
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    SASS
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h4" paragraph style={{ fontWeight: 800 }}>
                Back End
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    C#
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Java
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    C++
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    ASP.NET
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Node.js
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    2 years of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Expo
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    SQL Server
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    MySQL
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Oracle SQL
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    1 year of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Postman
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Spring
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    Firebase
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary" component="h2">
                    GraphQL
                  </Typography>
                  <Typography color="textPrimary" variant="subtitle2">
                    4 months of experience
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                    component="p"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Anime>
      </Container>
    </>
  );
}
