import { createSelector } from 'reselect';
import { MOVIES } from './constants';

export const selectorForMoviesData = () => state => state[MOVIES];

export const selectMoviesData = () =>
  createSelector(
    selectorForMoviesData(),
    state => state
  );
