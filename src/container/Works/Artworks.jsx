import React from 'react';

import { WorksItem } from '../../components';
import { data, images } from '../../constants';
import './Artworks.css';

const Artworks = () => (
  <div className='app__artworks flex__center section__padding' id='works'>
    <div className='app__artworks-title'>
      <h1 className='headtext__cormorant'>On going</h1>
    </div>

    <div className='app__artworks-works'>
      <div className='app__artworks-works_news  flex__center'>
        <p className='app__artworks-works_heading'>News</p>
        <div className='app__artworks_works_items'>
          {data.news.map((news, index) => (
            <WorksItem
              key={news.title + index}
              title={news.title}
              year={news.year}
              tags={news.tags}
            />
          ))}
        </div>
      </div>

      <div className='app__artworks-works_img'>
        <img src={images.works} alt='works__img' />
      </div>

      <div className='app__artworks-works_projects  flex__center'>
        <p className='app__artworks-works_heading'>Projects</p>
        <div className='app__artworks_works_items'>
          {data.projects.map((project, index) => (
            <WorksItem
              key={project.title + index}
              title={project.title}
              year={project.year}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default Artworks;
