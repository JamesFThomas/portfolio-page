import React from 'react';
import James from '../src/assets/jamefthomas.jpg';
import "./css/Splash.css"


function Splash() {
  const myName = 'James F. Thomas';
  const myRoles = 'JavaScript Developer * Martial Artist * Girevik * Horticulturalist'
  return (
    <div className="splash-container">
      <div className="splash-content">
      <img className="splash-image" src={James} alt="James Picture"/>
        <h1 className="splash-myName" >{myName}</h1>
        <hr className="splash-hrElement" />
        <p className="splash-myRoles">{myRoles}</p>
      </div>
    </div>
  );
}

export default Splash;