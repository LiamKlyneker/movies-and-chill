import { success } from '#modules/utils';
import { PERSONS_GET_DETAIL_PERSON, PERSONS_GET_MOVIE_CREDITS } from './constants';

const defaultState = {
  personDetail: {
    isFetching: true,
    info: {},
  },
  movieCredits: {
    isFetching: true,
    info: {},
  },
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PERSONS_GET_DETAIL_PERSON:
      return {
        ...state,
        personDetail: {
          ...state.personDetail,
          isFetching: true,
        },
      };
    case success(PERSONS_GET_DETAIL_PERSON):
      return {
        ...state,
        personDetail: {
          ...state.personDetail,
          isFetching: false,
          info: payload.data,
        },
      };

    case PERSONS_GET_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: {
          ...state.movieCredits,
          isFetching: true,
        },
      };
    case success(PERSONS_GET_MOVIE_CREDITS):
      return {
        ...state,
        movieCredits: {
          ...state.movieCredits,
          isFetching: false,
          info: payload.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;
