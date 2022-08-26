import React from 'react';
import { images } from '../../constants';
import './About.css';

const About = () => (
  <div className='app__about app__bg flex__center section__padding' id='about'>
    <div className='app__about-content flex__center'>
      <div className='app__about-content_aboutimage flex__center'>
        <img src={images.aboutimage} alt='about_aboutimage' />
      </div>

      <div className='app__about-content_cv'>
        <h1 className='headtext__cormorant'>About me</h1>

        <p className='p__opensans'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type='button' className='custom__button'>
          CV
        </button>
      </div>
    </div>
  </div>
);

export default About;
