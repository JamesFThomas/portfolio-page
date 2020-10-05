import React from 'react';
import { Container, Footer} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComp() {
  return (
    <Footer style={{marginTop: "30px", marginBottom: "30px" }}>
      <Container className="text-center" >
        <a href="https://github.com/JamesFThomas" style={{padding: "10px" }}>
          <FontAwesomeIcon icon={['fab', 'github']} size = '3x'/>
        </a>
        <a href="https://www.linkedin.com/in/james-thomas-396a24137/" style={{padding: "10px" }}>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size = '3x'/>
        </a>
        <a href="https://dev.to/jamesfthomas" style={{padding: "10px" }}>
          <FontAwesomeIcon icon={['fab', 'dev']} size = '3x'/>
        </a>
      </Container>
      <Container className="text-center">
          <h4>
            Copyright &copy; James F. Thomas {new Date().getFullYear()}.
          </h4>
        </Container>
    </Footer>
  );
}

export default FooterComp;