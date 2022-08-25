import React from 'react';

import { WorksItem } from '../../components';
import { data, images } from '../../constants';
import './Artworks.css';

const Artworks = () => (
  <div className='app__artworks flex__center section__padding' id='works'>
    <div className='app__artworks-title'>
      <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
    </div>

    <div className='app__artworks-works'>
      <div className='app__artworks-works_wine  flex__center'>
        <p className='app__artworks-works_heading'>Wine & Beer</p>
        <div className='app__artworks_works_items'>
          {data.wines.map((wine, index) => (
            <WorksItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className='app__artworks-works_img'>
        <img src={images.works} alt='works__img' />
      </div>

      <div className='app__artworks-works_cocktails  flex__center'>
        <p className='app__artworks-works_heading'>Cocktails</p>
        <div className='app__artworks_works_items'>
          {data.cocktails.map((cocktail, index) => (
            <WorksItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
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
