import {AUTH, AUTH_FAILURE} from '../constants/constants';

export const auth = url => {
  console.log(url);
  const tokenIndex = [url.indexOf('=') + 1, url.indexOf('&')];
  const idIndex = [url.lastIndexOf('_') + 4, url.lastIndexOf('&')];
  const accessToken = url.substring(tokenIndex[0], tokenIndex[1]);
  const userId = url.substring(idIndex[0], idIndex[1]);
  console.log(accessToken);
  console.log(userId);
  if (url.includes('error')) {
    return {
      type: AUTH_FAILURE,
    };
  } else {
    return {
      type: AUTH,
      accessToken: accessToken,
      userId: userId,
    };
  }
};
