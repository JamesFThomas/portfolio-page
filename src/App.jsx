import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Splash from './Splash.jsx';
import NavBar from './NavBar.jsx';
import FooterComp from './Footer.jsx';
import "./css/App.css"

library.add(fab);

function App() {
  return (
  <div className="page-container">
   <div className="content-wrap">
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/portfolio" >
              <Portfolio />
            </Route>
            <Route path="/">
              <Splash />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
      <FooterComp />
  </div>
  );
}

export default App;