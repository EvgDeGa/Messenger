import {GET_GROUP} from '../constants/constants';

export const getGroup = group => {
  return {
    type: GET_GROUP,
    count: group.count,
    items: group.items,
  };
};
