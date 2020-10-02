import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,
  } from "mdbreact";

  function NavBar() {
  return (
  <MDBNavbar color="indigo" >
      <MDBNavbarBrand>
        <strong className="white-text">James F. Thomas</strong>
      </MDBNavbarBrand>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/resume">Resume</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
  </MDBNavbar>
  );
}

export default NavBar;