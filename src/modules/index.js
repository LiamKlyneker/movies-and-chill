import { combineReducers } from 'redux';

import { MOVIES } from './Movies/constants';
import moviesReducer from './Movies/reducer';

const rootReducer = combineReducers({
  [MOVIES]: moviesReducer,
});

export default rootReducer;
