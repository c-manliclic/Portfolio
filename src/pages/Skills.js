import { Helmet } from "react-helmet";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Anime from "react-anime";
import { generateSkillCards } from "../helpers/SkillHelper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 75,
  },
}));

const FrontEndSkillList = () => {
  const frontEndSkills = [
    { name: "Javascript", yearsOfExperience: "4 years of experience" },
    { name: "Typescript", yearsOfExperience: "2 years of experience" },
    { name: "DevExtreme", yearsOfExperience: "2 years of experience" },
    { name: "jQuery", yearsOfExperience: "1 year of experience" },
    { name: "React", yearsOfExperience: "1 year of experience" },
    { name: "Material UI", yearsOfExperience: "1 year of experience" },
  ];
  return generateSkillCards(frontEndSkills);
};

const BackEndSkillList = () => {
  const backEndSkills = [
    { name: "C#", yearsOfExperience: "4 years of experience" },
    { name: "SQL", yearsOfExperience: "4 year of experience" },
    { name: "ASP.NET", yearsOfExperience: "4 years of experience" },
    { name: "Java", yearsOfExperience: "2 years of experience" },
    { name: "C++", yearsOfExperience: "2 years of experience" },
  ];
  return generateSkillCards(backEndSkills);
};

export default function Skills() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Skills | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
          <Typography variant="h3" paragraph>
            Skills
          </Typography>
          <Typography variant="h4" paragraph>
            Front-End
          </Typography>
          <FrontEndSkillList></FrontEndSkillList>
          <Typography variant="h4" paragraph style={{ marginTop: "50px" }}>
            Back-End
          </Typography>
          <BackEndSkillList></BackEndSkillList>
        </Anime>
      </Container>
    </>
  );
}
