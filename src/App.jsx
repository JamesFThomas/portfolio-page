import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Splash from './Splash.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <div className="router-container">
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
    </div>
    <Footer />
</BrowserRouter>
  );
}

export default App;