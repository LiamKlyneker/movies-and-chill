import { createSelector } from 'reselect';
import { PERSONS } from './constants';

export const selectorForPersonsData = () => state => state[PERSONS];

export const selectPersonData = () =>
  createSelector(
    selectorForPersonsData(),
    state => state
  );
