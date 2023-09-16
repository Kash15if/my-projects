import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import "./ProjectStyle.css";

const imagesDir = require.context("../assets/videos/", true);

const Projects = ({ title, videoURL, description, repo, webpage }) => {
  return (
    <Container className="main-container">
      <div className="left-section">
        <h2 className="main-header" style={{ textAlign: "left" }}>
          {title}
        </h2>
        <h2 className="sub-header" style={{ textAlign: "left" }}>
          Sub Header : Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{"Description"}</Accordion.Header>
            <Accordion.Body> {description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="flex-container">
          <a
            href={repo}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>

          <a
            href={webpage}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
      <div className="right-section">
        <video className="video-section" width="540" height="310" controls>
          <source src={imagesDir(`./${videoURL}`)} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
};

export default Projects;
