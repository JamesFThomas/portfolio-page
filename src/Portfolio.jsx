import React from 'react';
import {Card, Container, Row, Col, Button  } from 'react-bootstrap';
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import "./css/Portfolio.css"

function Portfolio() {
  const greeting = 'Portfolio Page';

  return (
    <div className="port-page" >
    <Container className="port-content">
      <Row >
        <Col sm={4} >
          <Card className="port-project1">
            <Card.Header><h3>GameTime</h3></Card.Header>
              <Card.Img className="port-project1-image" variant="top" src={Project1} />
            <Card.Body>
              <Card.Text>
                 The GameTime application is an online gaming platform focused on player and developer interactions our main goal is to allow
                 developers to host games and have players provide feedback to improve upon the game development process.
               </Card.Text>
               <Card.Text>React.js | Node.js | Express.js | PostgreSQL | Discord API | GameSpot API | Google API </Card.Text>
              <Button className="port-project1-button" href="https://github.com/dontphasemebros/game-app/" variant="success" >GitHub Repo</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} >
        <Card className="port-project2">
            <Card.Header><h3>Trailr</h3></Card.Header>
              <Card.Img className="port-project2-image" variant="top" src={Project2} />
            <Card.Body>
              <Card.Text>
                The Trailr application provides users access to hiking trails in their area, as well as search-by-location functionality.
                Trails load automatically as a user traverses to new areas within Google Maps.
              </Card.Text>
              <Card.Text>React.js | Node.js | Express.js | Passport.js | MySQL | Google Maps API | Babel </Card.Text>
              <Button className="port-project2-button" href="http://trailr.org/" variant="success" >Live Demo</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={4} >
        <Card className="port-project3">
            <Card.Header><h3>GitHub Finder</h3></Card.Header>
              <Card.Img className="port-project3-image" variant="top" src={Project3} />
            <Card.Body>
              <Card.Text>
                The Github Finder application is a web-based application utilizing the Github API to allow
                users to search Github user public repositories and profile information.
              </Card.Text>
              <Card.Text>React.js | Node.js | Express.js | CSS | GitHub API | Webpack </Card.Text>
              <Button className="port-project3-button" href="https://github-user-search-app-jft.netlify.app/" variant="success" >Live Demo</Button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row >
        <Col sm={6} >
          <Card className="port-project4">
            <Card.Header><h3>Contact Keeper</h3></Card.Header>
              <Card.Img className="port-project4-image" variant="top" src={Project4} />
            <Card.Body>
              <Card.Text>
                 The Contact Keeper application provides users a private account in order to save specific information
                 ( name, phone, email, relationship ) for desired individuals.
               </Card.Text>
               <Card.Text> React.js | Context API | Node.js | Express.js | MongoDB | Materialize </Card.Text>
              <Button className="port-project4-button" href="https://safe-depths-58200.herokuapp.com/" variant="success" >Live Demo</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} >
        <Card className="port-project5">
            <Card.Header><h3>Task Logger</h3></Card.Header>
              <Card.Img className="port-project5-image" variant="top" src={Project5} />
            <Card.Body>
              <Card.Text>
                The Task Logger application provides the user (IT department manager) with an application to create work
                orders and assign those work orders to technicians.
              </Card.Text>
              <Card.Text>React.js | Redux | Node.js | Express.js | MongoDB | Mongoose </Card.Text>
              <Button className="port-project5-button" href="https://immense-everglades-04572.herokuapp.com/" variant="success" >Live Demo</Button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Portfolio;
