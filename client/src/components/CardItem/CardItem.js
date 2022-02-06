import React from 'react';
import './CardItem.scss';

const CardItem = ({image, name, status, description}) => {
  return (
    <div className='cardItem'>

      <div className='cardItem__wrapper1'>
        <img  className='cardItem__image' src={image} alt={name} />
        <div className='cardItem__wrapper'>
          <p className='cardItem__name'>Name: {name}</p>
          <p className='cardItem__status'>Status: {status}</p>
        </div>
      </div>
        <p className='cardItem__description'>Description: {description}</p>
      
       
    </div>
  )
};

export default CardItem;

