import React from 'react';
import facebookIcon from '../../assets/icons/facebook-f-brands.svg';
import twitterIcon from '../../assets/icons/twitter-brands.svg';
import linkedInIcon from '../../assets/icons/linkedin-in-brands.svg';
import chatIcon from '../../assets/icons/comment-dots-regular.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__nav'> 
          <img className='footer__nav-item' src={facebookIcon} alt="facebook" />
          <img className='footer__nav-item' src={twitterIcon }alt="twitter" />
          <img className='footer__nav-item' src={linkedInIcon} alt="linkedin" />
        </div>
        <p className='footer__copyright'> &copy;2022 Proudly created by 4Goods </p>

      </div>
      <div className='footer__chat'>
        <img className='footer__nav-item' src={chatIcon} alt="chat icon" />
        <p>Let's Chat!</p>
      </div>
    </footer>

    
    </>
  );
};

export default Footer;
