import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

const LocationList = () => {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/location/');
        setLocations(response.data);
        console.log(response.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <section className="location-list grid-view">
      {locations.results &&
        locations.results.length > 0 &&
        locations.results.map(location => (
          <LocationCard key={location.id} {...location} />
        ))}
    </section>
  );
};

export default LocationList;
