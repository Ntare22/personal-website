import React from 'react';
import '../components/styles/main.scss'

const Navbar = () => {
  return (
    <header className='nav-bar'>
      <ul>
        <li>
          <a href='//#region'>Home</a>
        </li>
        <li>
          <a href='//#region'>About Me</a>
        </li>
        <li>
          <a href='//#region'>Skills</a>
        </li>
        <li>
          <a href='//#region'>Portfolio</a>
        </li>
        <li>
          <a href='//#region'>Contact</a>
        </li>
        <li>
          <a href='//#region'>Blog</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;

