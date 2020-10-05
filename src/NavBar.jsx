import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
// import { Container, Footer} from "mdbreact";


  function NavBar() {
  return (
    <Navbar>
      <Container className="text-center py-3 mx-auto ">
        <Row className="d-inline p-2 m-1 text-white">
          <Col>
            <Link to="/">
              <h4> James. F. Thomas </h4>
            </Link>
          </Col>
          <Col>
            <Link to="/about">
              <h4> About </h4>
            </Link>
          </Col>
          <Col>
            <Link to="/resume" >
              <h4> Resume </h4>
            </Link>
          </Col>
          <Col>
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