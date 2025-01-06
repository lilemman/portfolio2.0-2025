import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import projects from "../db/db";
const Projects = () => {
  return (
    <div className="container my-5">
      <Row xs={1} sm={2} md={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="cursor-pointer">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
