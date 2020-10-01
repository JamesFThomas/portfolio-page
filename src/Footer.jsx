import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
  import { BrowserRouter as Router } from 'react-router-dom';

function Footer() {
  const greeting = 'Footer Page';

  return (
    <h1>{greeting}</h1>
  );
}

export default Footer;