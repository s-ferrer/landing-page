import React from 'react';
import { images } from '../../constants';
import './Findus.css';

const Findus = () => (
  <div
    className='app__findus app__bg flex__center section__padding'
    id='findus'
  >
    <div className='app__findus-content flex__center'>
      <div className='app__findus-content_cv'>
        <h1 className='headtext__cormorant'>Contact</h1>

        <p className='p__opensans'>
          Wgvsgghstrasse 45, United Oceans, The world
        </p>
        <p className='p__opensans'>+6556 7766 98 98</p>
        <button type='button' className='custom__button'>
          email
        </button>
      </div>
      <div className='app__findus-content_findusimage flex__center'>
        <img src={images.welcome} alt='findus_findusimage' />
      </div>
    </div>
  </div>
);

export default Findus;
