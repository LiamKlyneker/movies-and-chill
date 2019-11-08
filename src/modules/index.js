import { combineReducers } from 'redux';

import { MOVIES } from './Movies/constants';
import moviesReducer from './Movies/reducer';

import { PERSONS } from './Persons/constants';
import personsReducer from './Persons/reducer';

const rootReducer = combineReducers({
  [MOVIES]: moviesReducer,
  [PERSONS]: personsReducer,
});

export default rootReducer;
