import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__nav'> 
        <img className='footer__nav-item' src="#" alt="facebook" />
        <img className='footer__nav-item' src="#" alt="twitter" />
        <img className='footer__nav-item' src="#" alt="linkedin" />
      </div>
      <p className='footer__copyright'> &copy;2022 Proudly created by 4goods </p>

    </footer>
  );
};

export default Footer;
