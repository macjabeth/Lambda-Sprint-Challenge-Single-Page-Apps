import React, { Fragment, useEffect, useState } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();

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

  const handleSearch = async name => {
    try {
      setCharacters(null);
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
      setCharacters(response.data);
      console.log(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Fragment>
      <SearchForm onSearch={handleSearch} />
      <section className="character-list grid-view">
        {characters ? (
          characters.results.map(char => (
            <CharacterCard key={char.id} {...char} />
          ))
        ) : (
          <Segment>
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          </Segment>
        )}
      </section>
    </Fragment>
  );
}
