import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/makeStore';

import MainHeader from '#components/header';
import HomePage from '#pages/home';
import MovieDetailPage from '#pages/movie-detail';
import ActorDetailPage from '#pages/actor-detail';

import './scss/default.scss';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <MainHeader />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:movieId" component={MovieDetailPage} />
        <Route exact path="/person/:personId" component={ActorDetailPage} />
      </Router>
    </ReduxProvider>
  );
}

export default App;
