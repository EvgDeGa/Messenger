import {REQUEST_SELFINF} from '../constants/constants';

export const getSelfInf = auth => {
  return {
    type: REQUEST_SELFINF,
    auth: auth,
  };
};
