import { success } from '#modules/utils';
import { MOVIES_GET_MOVIES_BY_SEARCH, MOVIES_GET_DETAIL } from './constants';

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

    default:
      return state;
  }
};

export default reducer;
