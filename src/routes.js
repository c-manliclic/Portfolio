import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
