import React from 'react';
import { MDBContainer, MDBFooter, MDBIcon} from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="text-center py-3">
        <MDBContainer fluid>
        <a href="#!" className="">
          <MDBIcon icon="linkedin" />
        </a>
        <a href="#!" className="">
          <MDBIcon icon="github" />
        </a>
        <a href="#!" className="">
          <MDBIcon icon="github" />
        </a>
      </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        Copyright &copy; James F. Thomas {new Date().getFullYear()}.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;