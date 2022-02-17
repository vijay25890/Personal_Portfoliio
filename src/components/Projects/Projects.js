import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img1 from "../../img/login1.jpg";
import "../../components/Projects/project.css";

const Projects = () => {
  return (
    <div className="h">
      <h4 className="heading">MY EXPERIENCE AND PROJECTS</h4>
      <CardGroup className="gapCard">
        <Card className="marginLeft">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>
              React Js Intern
              <p style={{ fontSize: "13px" }}>Ingenuim Technology Noida</p>
            </Card.Title>
            <Card.Text>
              Responsible for building an web applications with technologies
              such as HTML, Css, Javascript ,React Js, Node js, MongoDb and
              Postman We are making an single page applications to make them
              easy to maintain
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted txtFooter">1 Dec,2021 - Present</small>
          </Card.Footer>
        </Card>
        <Card className="marginRight">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>E-Commerce-App</Card.Title>
            <Card.Text>
              This project is building for purchasing Products remotely also we
              added an authentication page and payment gateway Also. In this
              current cowid’s situation this app is very useful for buying
              products’s online. Languages used: Node JS,Express
              Js,MongoDb,React Js,Postman.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted txtFooter">
              15 Oct,2021 - 1 Dec,2021
            </small>
          </Card.Footer>
        </Card>
        <Card className="margin">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Personal Portfolio</Card.Title>
            <Card.Text>
              This web app reflects my professional development(Previous
              projects, Internship experience, Trained in languages).I have used
              E-mail Js for contact form and also hosted using Netlify.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted txtFooter">
              1 Feb,2022 - 15 Feb,2022
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Projects;
