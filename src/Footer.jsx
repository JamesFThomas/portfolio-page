import React from 'react';
import { Container, Footer} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComp() {
  return (
    <Footer color="blue" >
      <div className="text-center py-3 mx-auto d-block">
        <Container >
        <a href="https://github.com/JamesFThomas" className="">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://www.linkedin.com/in/james-thomas-396a24137/" className="">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href="https://dev.to/jamesfthomas" className="">
          <FontAwesomeIcon icon={['fab', 'dev']} />
        </a>
      </Container>
      </div>
      <div className="footer-copyright text-center py-3">
        <Container >
        Copyright &copy; James F. Thomas {new Date().getFullYear()}.
        </Container>
      </div>
    </Footer>
  );
}

export default FooterComp;