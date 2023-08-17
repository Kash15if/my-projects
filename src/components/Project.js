import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
const Projects = ({ title, videoURL, description, repo, webpage }) => {
    return (

        <Container style={{ marginTop: "55px", border: "5px solid black", padding: "20px" }}>

            <h2 style={{ textAlign: "left" }}>{title}</h2>


            <iframe width="100%" height="500" src={videoURL}>
            </iframe>

            <Accordion >
                <Accordion.Item >
                    <Accordion.Header>{"Description"}</Accordion.Header>
                    <Accordion.Body> {description}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="flex-container">
                <a href={repo} className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >Code</a>
                <br />
                <a href={webpage} className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >Demo</a>
            </div>
        </Container>
    );
}

export default Projects;