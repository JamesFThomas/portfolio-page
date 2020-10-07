import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col, Button  } from 'react-bootstrap';
import "./css/NavBar.css"


  function NavBar() {
  return (
    <Navbar className="navbar-page">
      <Navbar.Brand className="navbar-brand" href="/home"><h3><em>James F. Thomas</em></h3></Navbar.Brand>
      <Container className="navbar-container">
        <Row className="navbar-content">
          <Col >
            <Button href="/about" variant="secondary" size="lg" className="navbar-button1">
              About
            </Button>
          </Col>
          <Col >
            <Button href="/resume" variant="secondary" size="lg" className="navbar-button2">
              Resume
            </Button>
          </Col>
          <Col >
            <Button href="/portfolio" variant="secondary" size="lg" className="navbar-button3">
              Portfolio
            </Button>
          </Col>
          <Col >
            <Button href="/contact" variant="secondary" size="lg" className="navbar-button4">
              Contact
            </Button>
          </Col>
        </Row>
      </Container>
  </Navbar>
  );
}

export default NavBar;