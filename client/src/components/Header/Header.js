import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img  className='header__logo' src="#" alt="header-logo" />
      <nav className='header__navlist'>
        <p className='header__navlist-item'>Home</p>
        <p className='header__navlist-item'>About</p>
        <p className='header__navlist-item'>Organization</p>
        <p className='header__navlist-item'>Login</p>
      </nav>
    </header>
  );
};

export default Header;
