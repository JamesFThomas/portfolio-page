import React from 'react';
import James from '../src/assets/jamesfthomas.jpg';
import "./css/Splash.css"


function Splash() {
  const myName = <h1>James F. Thomas</h1>;
  const creds = <h3>B.S., M.S.</h3>
  const myRoles = 'Software Developer * Martial Artist * Girevik * Horticulturalist'
  return (
    <div className="splash-container">
      <div className="splash-content">
      <img className="splash-image" src={James} alt="James Picture"/>
        <div className="splash-myName">
          {myName}
        </div>
        <div className="splash-creds">
          {creds}
        </div>
        <hr className="splash-hrElement" />
        <p className="splash-myRoles">{myRoles}</p>
      </div>
    </div>
  );
}

export default Splash;