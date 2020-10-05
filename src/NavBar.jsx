import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, Navbar
  } from 'react-bootstrap';


  function NavBar() {
  return (
    <Navbar className="navbar navbar-expand-lg" bg="dark">
      <Nav>
        <Navbar.Brand>
         James F. Thomas
        </Navbar.Brand>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/resume" >
          Resume
        </Link>
        <Link to="/portfolio" >
           Portfolio
        </Link>
      </Nav>
  </Navbar>
  );
}

export default NavBar;