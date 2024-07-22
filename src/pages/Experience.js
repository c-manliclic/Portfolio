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

const WorkExperienceList = () => {
  const workExperiences = [
    {
      title: "Software Developer",
      organization: "Apparatus Global Solutions",
      details: [
        "Developed responsive .NET 7 MVC Layout with native HTML and DevExtreme",
        "Created a modern theme with animations for an engaging user interface",
        "Implemented release note functionality for user updates and developed a backend system to ensure versioning accuracy for each account",
        "Constructed essential helper functions within a .NET 7 environment, seamlessly integrated with Azure Cosmos DB using Gremlin Query",
      ],
    },
    {
      title: "Software Developer (Co-op)",
      organization: "Apparatus Global Solutions",
      details: [
        "Enhanced skills in ASP.NET to create a GeoLocation editor UI and database",
        "Used .NET Core to build an eDoc player that integrates a locked‑down PDF interface",
        "Utilized SQL Server Databases effectively for initial GeoLocation data creation and produced GeoLocation and User objects applying Object Relational Mapping",
        "Employed Git and GitHub for source control to maintain and organize code repositories, facilitating smooth project collaboration and integration",
      ],
    },
  ];

  return generateExperienceCards(workExperiences);
};

const EducationExperienceList = () => {
  const educationExperiences = [
    {
      title: "Computer Programming and Analysis",
      organization: "Fanshawe College (Ontario College Advanced Diploma)",
      details: [
        "Cumulative GPA: 4.08; President’s Honour Roll",
        "Acquired skills of networking concepts to develop, deploy, and maintain programs",
        "Achieved proficiency in the domains of object‑oriented programming, client/server architecture, and database development",
        "Awarded Dean's Honour Roll in 2018, 2019, 2020, and 2021",
      ],
    },
    {
      title: "Peer Mentor",
      organization: "Fanshawe College",
      details: [
        "Mentored students in various Computer Programming and Analysis courses, including Programming Fundamentals (INFO1214) and Object‑Oriented Programming with C++ (INFO1156)",
        "Facilitated lessons on basic programming concepts and theories, primarily variables, structures, and syntax",
        "Helped students complete projects by collaboratively trouble shooting and facilitating creative problem solving",
      ],
    },
    {
      title: "Pre-Media (Ontario College Certificate)",
      organization: "Fanshawe College",
      details: [
        "Developed a solid foundation in skills and knowledge of various media and communication fields",
        "Created and published media projects that effectively tell a story",
        "Strengthened skills in Adobe Premiere, Adobe After Effects, Adobe Photoshop, and Logic Pro X",
      ],
    },
    {
      title: "Professional Communication",
      organization: "Toronto Metropolitan University",
      details: [
        'Completed communication‑based courses such as "Social Media and Text" and "Promotional Communication and Social Media"',
        "Produced a social media campaign for Toronto Metropolitan University’s breakfast program",
        "Learned how to target specific demographics by implementing the modes of persuasion: Ethos, Pathos, Logos",
      ],
    },
  ];

  return generateExperienceCards(educationExperiences);
};

export default function Experience() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Experience | Colin</title>
      </Helmet>
      <Container className={classes.container}>
        <Anime opacity={[0, 1]} translateY={"2em"} delay={(e, i) => i * 500}>
          <Typography variant="h3" paragraph style={{ fontWeight: 800 }}>
            Experience
          </Typography>
          <Typography variant="h4" paragraph>
            Work
          </Typography>
          <WorkExperienceList></WorkExperienceList>
          <Typography variant="h4" paragraph style={{ marginTop: "16px" }}>
            Education
          </Typography>
          <EducationExperienceList></EducationExperienceList>
        </Anime>
      </Container>
    </>
  );
}
