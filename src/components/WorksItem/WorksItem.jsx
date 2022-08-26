import React from 'react';

import './WorksItem.css';

const WorksItem = ({ title, year, tags }) => (
  <div className='app__worksitem'>
    <div className='app__worksitem-head'>
      <div className='app__worksitem-name'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
      <div className='app__worksitem-dash' />
      <div className='app__worksitem-year'>
        <p className='p__cormorant'>{year}</p>
      </div>
    </div>

    <div className='app__worksitem-sub'>
      <p className='p__opensans' style={{ color: '#AAAAAA' }}>
        {tags}
      </p>
    </div>
  </div>
);

export default WorksItem;
