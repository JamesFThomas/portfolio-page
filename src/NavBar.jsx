import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
// import { Container, Footer} from "mdbreact";


  function NavBar() {
  return (
    <Navbar>
      <Container >
        <Row>
          <Col sm={4}>
            <Link to="/">
              <h4> James F. Thomas </h4>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/about">
              <h4> About </h4>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/resume" >
              <h4> Resume </h4>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/portfolio" >
              <h4> Portfolio </h4>
            </Link>
          </Col>
        </Row>
      </Container>
  </Navbar>
  );
}

export default NavBar;