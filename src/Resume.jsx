import React from 'react';
import resume from '../src/assets/jftResume.pdf';
import "./css/Resume.css"

function Resume() {
  const greeting = 'Resume Page';

  return (
    <div className="resume-page">
      <object  className="resume-content" data={resume} type="application/pdf" />
    </div>
  );
}

export default Resume;