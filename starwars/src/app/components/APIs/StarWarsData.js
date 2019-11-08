import { useEffect, useState } from 'react';
import Axios from 'axios';

const StarWarsData = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    Axios.get('https://swapi.co/api/people/')
      .then((res) => {
        const nextPage = res.data.next;
        const prevPage = res.data.previous;
        const tenCharacters = res.data.results;
        console.log(nextPage, prevPage);
        return setCharacters(tenCharacters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return characters;
};

export default StarWarsData;
