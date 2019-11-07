import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/makeStore';

import MainHeader from '#components/header';
import HomePage from '#pages/home';
import MovieDetail from '#pages/movie-detail';

import './scss/default.scss';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <MainHeader />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
      </Router>
    </ReduxProvider>
  );
}

export default App;
