import { personApi, apiKey } from '#services/api';
import { PERSONS_GET_DETAIL_PERSON } from './constants';

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
