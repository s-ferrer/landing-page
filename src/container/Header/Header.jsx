import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header_img' />
    </div>
  </div>
);

export default Header;
