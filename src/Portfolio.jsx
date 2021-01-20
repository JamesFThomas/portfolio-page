import React from 'react';
import {Card, Button  } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import "./css/Portfolio.css"

function Portfolio() {

  return (
    <Carousel className="port-content">

      <Carousel.Item className="port-project">
            <div>
              <img className="port-project-image" src={Project2} />
            </div>
            <div className='port-project-body'>
              <h3>Trailr</h3>
              <p>
                The Trailr application provides users access to hiking trails in their area, as well as search-by-location functionality.
                <br></br>
                Trails load automatically as a user traverses to new areas within Google Maps.
              </p>
              <p>React.js | Node.js | Express.js | Passport.js | MySQL | Google Maps API | Babel </p>
              <Button className="port-project-button" href="http://trailr.org/" variant="success" >Live Demo</Button>
            </div>
        </Carousel.Item>

        <Carousel.Item className="port-project">
           <img className="port-project-image" variant="top" src={Project3} />
            <div className='port-project-body'>
            <h3>GitHub Finder</h3>
              <p>
                The Github Finder application is a web-based application utilizing the Github API to allow
                users to search Github user public repositories and profile information.
              </p>
              <p>React.js | Node.js | Express.js | CSS | GitHub API | Webpack </p>
              <Button className="port-project-button" href="https://github-user-search-app-jft.netlify.app/" variant="success" >Live Demo</Button>
            </div>
        </Carousel.Item>

        <Carousel.Item className="port-project">
          <img className="port-project-image" variant="top" src={Project4} />
          <div className='port-project-body'>
            <h3>Contact Keeper</h3>
              <p>
                 The Contact Keeper application provides users a private account in order to save specific information
                 ( name, phone, email, relationship ) for desired individuals.
               </p>
               <p> React.js | Context API | Node.js | Express.js | MongoDB | Materialize </p>
              <Button className="port-project-button" href="https://safe-depths-58200.herokuapp.com/" variant="success" >Live Demo</Button>
            </div>
        </Carousel.Item>

        <Carousel.Item className="port-project">
            <img className="port-project-image" variant="top" src={Project5} />
            <div className='port-project-body'>
            <h3>Task Logger</h3>
              <p>
                The Task Logger application provides the user (IT department manager) with an application to create work
                orders and assign those work orders to technicians.
              </p>
              <p>React.js | Redux | Node.js | Express.js | MongoDB | Mongoose </p>
              <Button className="port-project-button" href="https://immense-everglades-04572.herokuapp.com/" variant="success" >Live Demo</Button>
            </div>
        </Carousel.Item>

        <Carousel.Item className="port-project">
            <div>
              <img className="port-project-image" variant="top" src={Project1} />
            </div>
            <div className='port-project-body' >
              <h3>GameTime</h3>
              <p>
                 The GameTime application is an online gaming platform focused on player and developer interactions.
                 <br></br>
                 Our main goal is to allow developers to host games and have players provide feedback to improve upon the game development process.
               </p>
               <p>React.js | Node.js | Express.js | PostgreSQL | Discord API | GameSpot API | Google API </p>
              <Button className="port-project-button" href="https://github.com/dontphasemebros/game-app/" variant="warning" >GitHub Repo</Button>
            </div>
        </Carousel.Item>

    </Carousel>
  );
}

export default Portfolio;
