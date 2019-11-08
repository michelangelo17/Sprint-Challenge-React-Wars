import React from 'react';
import CardMaker from '../cardMaker/CardMaker';
import { Container } from '../../../stylesAndEmotions/GlobalEmotions'


const Cards = props => {
  const characterArray = props.characterArray;
  return (
    <Container 
      width='100%'
      fd='r'
      jc='c'
      fw='wrap'
    >
      {characterArray.map((character, index) => (
        <CardMaker 
          charName={character.name} 
          born={character.birth_year} 
          homeworld={character.homeworld}
          key={index}
        />
      ))}
    </Container>
  );
} 

export default Cards;