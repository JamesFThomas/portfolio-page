import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import "./css/NavBar.css"


  function NavBar() {
  return (
    <Navbar className="navbar-page">
      <Container className="navbar-container">
        <Row className="navbar-content">
          <Col sm={4}>
            <Link to="/">
              <h4> James F. Thomas </h4>
            </Link>
          </Col>
          <Col sm={2}>
            <Link to="/about">
              <h4>About</h4>
            </Link>
          </Col>
          <Col sm={2}>
            <Link to="/resume" >
              <h4>Resume</h4>
            </Link>
          </Col>
          <Col sm={2}>
            <Link to="/portfolio" >
              <h4>Portfolio</h4>
            </Link>
          </Col>
          <Col sm={2}>
            <Link to="/contact">
              <h4>Contact</h4>
            </Link>
          </Col>
        </Row>
      </Container>
  </Navbar>
  );
}

export default NavBar;