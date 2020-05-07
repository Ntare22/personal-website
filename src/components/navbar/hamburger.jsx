import React from 'react';

const Hamburger = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div role='button' tabIndex={0} className='nav-btn' onClick={onClick}>
      <span className='nav-btn_burger'></span>
    </div>
  );
}

export default Hamburger;

