import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img  className='header__logo' src="#" alt="header-logo" />
      </Link>
      <nav className='header__navlist'>
        <Link to='/'>
          <p className='header__navlist-item'>Home</p>
        </Link>
        <Link to='#'>
          <p className='header__navlist-item'>About</p>
        </Link>
        <Link to='/organizations'>
          <p className='header__navlist-item'>Organizations</p>
        </Link>
        <Link to='/login'>
          <p className='header__navlist-item'>Login</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
