import {REQUEST_SEARCH} from '../constants/constants';

export const getSearch = auth => {
  return {
    type: REQUEST_SEARCH,
    auth: auth,
  };
};
