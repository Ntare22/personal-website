import React, { useState } from 'react';
import '../styles/header.scss';
import Hamburger from './hamburger.jsx'



const Navbar = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleClick = () => {
    const hamburger = document.querySelector('.nav-btn_burger')
    if (!showBtn) {
      hamburger.classList.add('open');
      setShowBtn(!showBtn);
    } 
    if (showBtn) {
      hamburger.classList.remove('open');
      setShowBtn(!showBtn);
    }
  }

  return (
    <React.Fragment>
      <div className='nav-bar'>
        <Hamburger onClick={handleClick}/>
        <section className='nav-bar_items'>
          <a href='#intro-section' className='nav-bar_item'>Home</a>
          <a href='#about-section' className='nav-bar_item'>About Me</a>
          <a href='//#region' className='nav-bar_item'>Skills</a>
          <a href='//#region' className='nav-bar_item'>Portfolio</a>
          <a href='//#region' className='nav-bar_item'>Contact</a>
          <a href='//#region' className='nav-bar_item'>Blog</a>
        </section>
        <hr className='heading-separator'/>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

