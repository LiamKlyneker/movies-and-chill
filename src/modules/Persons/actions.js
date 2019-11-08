import { personApi, apiKey } from '#services/api';
import { PERSONS_GET_DETAIL_PERSON, PERSONS_GET_MOVIE_CREDITS } from './constants';

export const getPersonDetail = ({ personId }) => ({
  type: PERSONS_GET_DETAIL_PERSON,
  payload: {
    request: {
      url: `${personApi}/${personId}`,
      params: {
        api_key: apiKey,
      },
    },
  },
});

export const getPersonMovieCredits = ({ personId }) => ({
  type: PERSONS_GET_MOVIE_CREDITS,
  payload: {
    request: {
      url: `${personApi}/${personId}/movie_credits`,
      params: {
        api_key: apiKey,
      },
    },
  },
});
