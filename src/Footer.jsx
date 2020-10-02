import React from 'react';
import { MDBContainer, MDBFooter, MDBIcon} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <MDBFooter color="blue" >
      <div className="text-center py-3 mx-auto d-block">
        <MDBContainer >
        <a href="https://github.com/JamesFThomas" className="">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://www.linkedin.com/in/james-thomas-396a24137/" className="">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href="https://dev.to/jamesfthomas" className="">
          <FontAwesomeIcon icon={['fab', 'dev']} />
        </a>
      </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer >
        Copyright &copy; James F. Thomas {new Date().getFullYear()}.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;