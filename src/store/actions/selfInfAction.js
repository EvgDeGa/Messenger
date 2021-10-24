import {GET_SELFINF} from '../constants/constants';

export const getSelfInf = selfInf => {
  const payload = selfInf.response[0];
  console.log(payload);

  return {
    type: GET_SELFINF,
    payload: payload,
  };
};
