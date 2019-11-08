import { success } from '#modules/utils';
import {
  MOVIES_GET_MOVIES_BY_SEARCH,
  MOVIES_GET_DETAIL,
  MOVIES_GET_CREDITS,
} from './constants';

const defaultState = {
  moviesSearchList: {
    isFetching: false,
    isFetchingMore: false,
    meta: {},
    list: [],
  },
  movieDetail: {
    isFetching: true,
    info: {},
  },
  movieCredits: {
    isFetching: true,
    info: {},
  },
  currentSearchText: '',
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case MOVIES_GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        moviesSearchList: {
          ...state.moviesSearchList,
          isFetching: true,
        },
      };
    case success(MOVIES_GET_MOVIES_BY_SEARCH):
      return {
        ...state,
        moviesSearchList: {
          ...state.moviesSearchList,
          isFetching: false,
          meta: {
            total_results: payload.data.total_results,
            page: payload.data.page,
            total_pages: payload.data.total_pages,
          },
          list: payload.data.results,
        },
        currentSearchText: payload.config.params.query,
      };

    case MOVIES_GET_DETAIL:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          isFetching: true,
        },
      };
    case success(MOVIES_GET_DETAIL):
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          isFetching: false,
          info: payload.data,
        },
      };

    case MOVIES_GET_CREDITS:
      return {
        ...state,
        movieCredits: {
          ...state.movieCredits,
          isFetching: true,
        },
      };
    case success(MOVIES_GET_CREDITS):
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
