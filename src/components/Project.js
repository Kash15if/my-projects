import "./ProjectStyle.css";
import { Accordion } from "react-bootstrap";
import React from "react";

const imagesDir = require.context("../assets/videos/", true);

const Project = ({
  title,
  videoURL,
  description,
  repo,
  webpage,
  index,
  subTitle,
}) => {
  const isOdd = index % 2 === 1; // Check if the component is odd

  return (
    <div className="main-container">
      <div className={`content-section ${isOdd ? "odd" : "even"}`}>
        <div className="left-section">
          <h2 className="main-header" style={{ textAlign: "left" }}>
            {title}
          </h2>
          <p className="sub-header" style={{ textAlign: "left" }}>
            {subTitle}
          </p>
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
          <video className="video-section" controls>
            <source src={imagesDir(`./${videoURL}`)} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="desc-section">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{"Description"}</Accordion.Header>
            <Accordion.Body>
              <p>
                {description.split("\n\n").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Project;
