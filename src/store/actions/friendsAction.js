import {GET_FRIENDS} from '../constants/constants';

export const getFriends = friends => {
  return {
    type: GET_FRIENDS,
    count: friends.count,
    items: friends.items,
  };
};
