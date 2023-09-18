import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import data from "../data/projectDetails";

const Projects = () => {
  // data.forEach((item) => console.log(item));
  return (
    <div>
      {data.map((item, index) => (
        <div id={item.id}>
          <Project
            title={item.title}
            videoURL={item.videoURL}
            description={item.description}
            repo={item.repo}
            webpage={item.webpage}
            index={index}
            subTitle={item.subTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
