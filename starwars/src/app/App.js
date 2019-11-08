import React from 'react';
import '../stylesAndEmotions/App.css';
import StarWarsData from './components/APIs/StarWarsData'
import Cards from './components/cards/Cards';
import { Container, H1 } from '../stylesAndEmotions/GlobalEmotions';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const characterArray = StarWarsData();
  console.log(characterArray);
  return (
    <Container fd='c' jc='c'>
      <H1 textAlign='center'>React Wars</H1>
      <Cards characterArray={characterArray} />
    </Container>
  );
}

export default App;