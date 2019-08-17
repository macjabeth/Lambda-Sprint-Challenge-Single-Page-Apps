import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    (async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setCharacters(response.data);
        console.log(response.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.results &&
        characters.results.length > 0 &&
        characters.results.map(char => (
          <CharacterCard key={char.id} {...char} />
        ))}
    </section>
  );
}
