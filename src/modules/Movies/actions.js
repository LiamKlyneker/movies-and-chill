import { movieSearchApi, movieApi, apiKey } from '#services/api';
import { MOVIES_GET_MOVIES_BY_SEARCH, MOVIES_GET_DETAIL } from './constants';

export const getMoviesBySearch = ({ searchText }) => ({
  type: MOVIES_GET_MOVIES_BY_SEARCH,
  payload: {
    request: {
      url: movieSearchApi,
      params: {
        query: searchText,
        include_adult: false,
        language: 'en-US',
      },
    },
  },
});

export const getMovieDetail = ({ movieId }) => ({
  type: MOVIES_GET_DETAIL,
  payload: {
    request: {
      url: `${movieApi}/${movieId}`,
      params: {
        api_key: apiKey,
      },
    },
  },
});
