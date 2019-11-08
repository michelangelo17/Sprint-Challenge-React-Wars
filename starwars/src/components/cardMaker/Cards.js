import React from 'react';
import CardMaker from './CardMaker';

const Cards = props => {
  const characterArray = props.characterArray;
  return (
    <div>
      {characterArray.map((character, index) => (
        <CardMaker 
          charName={character.name} 
          born={character.birth_year} 
          homeworld={character.homeworld}
          key={index}
        />
      ))}
    </div>
  );
} 

export default Cards;