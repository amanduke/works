import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Latest Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Landing-page for an app developed for new gamers'
              label='PlayerBeyond'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Yoga teaching website designed using Wordpress'
              label='Alexis Teaches Yoga'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Track your spending habits with this budget tracker app'
              label='Budget Tracker'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='An art search app developed using React, Apollo, and GraphQL'
              label='Artspo'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Timed coding quiz made with CSS, JavaScript, and HTML'
              label='JavaScript Quiz'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
