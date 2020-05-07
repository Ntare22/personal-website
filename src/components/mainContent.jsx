import React from 'react';
import Intro from './sections/Intro.jsx';
import About from './sections/About.jsx';

const mainContent = () => {
  return (
    <div className='main-content'>
      <Intro />
      <About />
    </div>
  );
}

export default mainContent;

