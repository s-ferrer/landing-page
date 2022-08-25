import React from 'react';

import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Contact
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          wajhsnbdbbcdhj strasse, Berlin, 10568 Germany
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>contact@saraferrer.com</p>
        <p className='p__opensans'>@studiosaraferrer</p>
      </div>
      <button
        type='button'
        className='custom__button'
        style={{ marginTop: '2rem' }}
      >
        Visit Us
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='laurels_img' />
    </div>
  </div>
);

export default FindUs;
