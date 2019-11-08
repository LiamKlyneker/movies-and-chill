import { success } from '#modules/utils';
import { PERSONS_GET_DETAIL_PERSON } from './constants';

const defaultState = {
  personDetail: {
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

    default:
      return state;
  }
};

export default reducer;
