import React from 'react';
import {Card, Container, Row, Col, Button  } from 'react-bootstrap';
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';

function Portfolio() {
  const greeting = 'Portfolio Page';

  return (
    <Container>
      <Row >
        <Col sm={6} >
          <Card>
            <Card.Header><h3>GameTime</h3></Card.Header>
              <Card.Img variant="top" src={Project1} style={{ width: "100%", height: '100%' }}/>
            <Card.Body>
              <Card.Text>
                 The GameTime application is an online gaming platform focused on player and developer interactions our main goal is to allow
                 developers to host games and have players provide feedback to improve upon the game development process.
               </Card.Text>
              <Button href="http://www.phaserbros.com/" variant="success" >phaserbros.com</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} >
        <Card>
            <Card.Header><h3>Trailr</h3></Card.Header>
              <Card.Img variant="top" src={Project2} style={{ width: "100%", height: '100%' }}/>
            <Card.Body>
              <Card.Text>
                The Trailr application provides users access to hiking trails in their area, as well as search-by-location functionality.
                Trails load automatically as a user traverses to new areas within Google Maps.
              </Card.Text>
              <Button href="http://trailr.org/" variant="success" >Trailr.org</Button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;