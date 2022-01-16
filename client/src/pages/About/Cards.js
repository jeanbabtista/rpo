import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome to GameZ</h1>
      <p1>GameZ.com is number one website for online games. GameZ is a game publisher and game developer. The GameZ platform is a social network of millions of players. </p1>
      <h2>Our developers are: </h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Žan Bedrač'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Adam Baša'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Luka Lovenjak'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Jaša Lozinšek'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;