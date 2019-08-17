import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';

const AppRouter = () => {
  return (
    <React.Fragment>
      <Route path='/' exact component={WelcomePage} />
      <Route path='/character' component={CharacterList} />
      <Route path='/location' component={LocationList} />
      {/* <Route path='/episode' component={EpisodeList} /> */}
    </React.Fragment>
  );
};

export default AppRouter;
