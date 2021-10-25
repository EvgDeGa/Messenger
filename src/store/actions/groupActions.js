import {REQUEST_GROUP} from '../constants/constants';

export const getGroup = auth => {
  return {
    type: REQUEST_GROUP,
    auth: auth,
  };
};
