import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Me</h1>
        <p className='p__opensans'>Mycalle, Berlin, 10019, Germany</p>
        <p className='p__opensans'>contact@saraferrer.com</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.logosf} alt='footer_logo' />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Imprint & Private Policy</h1>
        <p className='p__opensans'>Website design by Titirum</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022© Sara Ferrer. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
