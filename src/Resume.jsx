import React from 'react';
import resume from '../src/assets/jftResume.pdf';

function Resume() {
  const greeting = 'Resume Page';

  return (
    <div >
      <object width="1700px" height="1200px" data={resume} type="application/pdf" />
    </div>
  );
}

export default Resume;