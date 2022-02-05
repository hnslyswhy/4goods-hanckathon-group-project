import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navlist'>
        <p className='navlist__item'>Home</p>
        <p className='navlist__item'>About</p>
        <p className='navlist__item'>Organization</p>
        <p className='navlist__item'>Login</p>
      </nav>
    </header>
  );
};

export default Header;
