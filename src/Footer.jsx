import React from 'react';
import { Container, Footer} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./css/Footer.css"

function FooterComp() {
  return (
    <Footer className="footer-page">
      <Container className="footer-content1" >
        <a
        className="footer-icon"
        href="https://github.com/JamesFThomas"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size = '3x'/>
        </a>
        <a
        className="footer-icon"
        href="https://www.linkedin.com/in/james-thomas-396a24137/"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size = '3x'/>
        </a>
        <a
        className="footer-icon"
        href="https://dev.to/jamesfthomas"
        >
          <FontAwesomeIcon icon={['fab', 'dev']} size = '3x'/>
        </a>
      </Container>
      <hr className="footer-hrElement"/>
      <Container className="footer-content2">
          <h4>
            Copyright &copy; James F. Thomas {new Date().getFullYear()}.
          </h4>
        </Container>
    </Footer>
  );
}

export default FooterComp;