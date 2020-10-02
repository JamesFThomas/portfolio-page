import React from 'react';
import James from '../src/assets/jamefthomas.jpg';


function Splash() {
  const myName = 'James F. Thomas';
  const myRoles = 'JavaScript Developer * Martial Artist * Girevik * Horticulturalist'
  return (
    <div style={{ margin: 'auto', textAlign: 'center'}}>
      <img src={James} alt="James Picture" style={{borderRadius:'50%'}}/>
        <h1>{myName}</h1>
        <p>{myRoles}</p>
    </div>
  );
}

export default Splash;