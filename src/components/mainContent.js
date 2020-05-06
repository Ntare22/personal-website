import React from 'react';
import Intro from './sections/Intro';
import About from './sections/About';

const mainContent = () => {
  return (
    <div className='main-content'>
      <Intro />
      <About />
    </div>
  );
}

export default mainContent;

