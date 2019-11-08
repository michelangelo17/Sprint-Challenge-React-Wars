import React from 'react';

const CardMaker = props => {
  return (
    <div>
      <h2>{props.charName}</h2>
      <p>{props.born}</p>
      <p>{props.homeworld}</p>
      {/* <p>{starships}</p>
      <p>{vehicles}</p> */}
    </div> 
  );
} 

export default CardMaker;