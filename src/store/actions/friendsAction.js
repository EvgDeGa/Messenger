import {REQUEST_GALLERY} from '../constants/constants';

export const getFriends = auth => {
  return {
    type: REQUEST_GALLERY,
    auth: auth,
  };
};
