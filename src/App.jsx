import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Splash from './Splash.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
  <Router>
    <main>
      {/* <nav>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/about">Contact</a></li>
          <li><a href="/contact">Resume</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav> */}
      <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/contact"  component={Contact} />
      <Route path="/contact"  component={About} />
      <Route path="/resume"  component={Resume} />
      <Route path="/portfolio"  component={Portfolio} />
    </Switch>
    </main>
</Router>
  );
}

export default App;