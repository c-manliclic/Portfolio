import { Helmet } from "react-helmet";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Anime from "react-anime";
import { generateExperienceCards } from "../helpers/ExperienceHelper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 50,
  },
}));

const ExperienceList = () => {
  const experiences = [
    {
      title: "Software Developer",
      organization: "Apparatus Global Solutions",
    },
    {
      title: "Software Developer (Co-op)",
      organization: "Apparatus Global Solutions",
    },
    {
      title: "Computer Programmer Analyst (4.08 GPA - President's Honour Roll)",
      organization: "Fanshawe College (Ontario College Advanced Diploma)",
    },
    {
      title: "Peer Mentor",
      organization: "Fanshawe College",
    },
    {
      title: "Dean's Honour Roll 2018",
      organization: "Fanshawe College",
    },
    {
      title: "Dean's Honour Roll 2019",
      organization: "Fanshawe College",
    },
    {
      title: "Dean's Honour Roll 2020",
      organization: "Fanshawe College",
    },
    {
      title: "Dean's Honour Roll 2021",
      organization: "Fanshawe College",
    },
  ];

  return generateExperienceCards(experiences);
};

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
          <ExperienceList />
        </Anime>
      </Container>
    </>
  );
}
