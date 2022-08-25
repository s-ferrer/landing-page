import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.divider} alt='ivider_image' className='divider__img' />
  </div>
);

export default SubHeading;
