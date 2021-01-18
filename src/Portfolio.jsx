import React from 'react';
import {Card, Container, Row, Col, Button  } from 'react-bootstrap';
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import "./css/Portfolio.css"

function Portfolio() {
  const greeting = 'Portfolio Page';

  return (
    <div className="port-page" >
    <Container className="port-content">
      <Row >
        <Col sm={6} >
          <Card className="port-project1">
            <Card.Header><h3>GameTime</h3></Card.Header>
              <Card.Img className="port-project1-image" variant="top" src={Project1} />
            <Card.Body>
              <Card.Text>
                 The GameTime application is an online gaming platform focused on player and developer interactions our main goal is to allow
                 developers to host games and have players provide feedback to improve upon the game development process.
               </Card.Text>
               <Card.Text>React.js | Node.js | Express.js | PostgreSQL | Discord API | GameSpot API | Google API </Card.Text>
              <Button className="port-project1-button" href="https://github.com/dontphasemebros/game-app/" variant="success" >phaserbros.com</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} >
        <Card className="port-project2">
            <Card.Header><h3>Trailr</h3></Card.Header>
              <Card.Img className="port-project2-image" variant="top" src={Project2} />
            <Card.Body>
              <Card.Text>
                The Trailr application provides users access to hiking trails in their area, as well as search-by-location functionality.
                Trails load automatically as a user traverses to new areas within Google Maps.
              </Card.Text>
              <Card.Text>React.js | Node.js | Express.js | Passport.js | MySQL | Google Maps API | Babel </Card.Text>
              <Button className="port-project2-button" href="http://trailr.org/" variant="success" >Trailr.org</Button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Portfolio;
