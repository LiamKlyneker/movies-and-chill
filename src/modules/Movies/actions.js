import { movieSearch } from '#services/api';
import { MOVIES_GET_MOVIES_BY_SEARCH } from './constants';

export const getMoviesBySearch = ({ searchText }) => ({
  type: MOVIES_GET_MOVIES_BY_SEARCH,
  payload: {
    request: {
      url: movieSearch,
      params: {
        query: searchText,
        include_adult: false,
        language: 'en-US',
      },
    },
  },
});
