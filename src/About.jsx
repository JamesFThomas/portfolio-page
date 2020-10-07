import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import James2 from './assets/jamesfthomas2.jpg';
import James from './assets/jamesfthomas.jpg';
import James3 from './assets/jamesfthomas3.jpg';
import "./css/About.css";


function About() {
  const myName = 'James F. Thomas';

  return (
    <div className="about-page" >
      <Container className="about-content">
        <Row>
          <Col md={6} className="offset-3">
            <Card className="about-card">
              <Card.Header className="about-title"><h3>{myName}</h3></Card.Header>
              <Card.Img className="about-image" variant="top" src={James3} />
              <Card.Body>
                <Card.Text className="about-text">
                I love software development because the problems that can be solved are limited only by my imagination to create innovative applications.
                As a software engineer, I feel I thrive in the group format and love those opportunities that allow me to combine ideas with a teammate which produces unforeseen outcomes. 
                I truly enjoyed my most recent group efforts in developing apps that utilized technologies like Javascript, React, Node, Express, Passport, MySQL, PostgreSQL, and mongoose. 
                My curiosity drives me to constantly apply myself to collecting experiences.
                From physical health, martial arts, and gardening to music, DIY projects, and travel, I love participating in activities that result in growth, creation, and improvement.  
                I am forward focused on solidifying the habit of creating things that positively affect others who encounter them.
                I'm open to any opportunities that will allow me to do just that.
                Do you have one for me?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;