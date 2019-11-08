import React from 'react';
import { Container, H2, P } from '../../../stylesAndEmotions/GlobalEmotions';

const CardMaker = (props) => {
  return (
    <Container
      fd='c'
      jc='c'
      width='25%'
      bgColor='white'
      margin='3%'
      br='10px'
      shadow='y'
    >
      <H2 textAlign='center'>{props.charName}</H2>
      <P textAlign='center'>Born: {props.born}</P>
    </Container>
  );
};

export default CardMaker;
