import {REQUEST_GALLERY} from '../constants/constants';

export const getGallery = auth => {
  return {
    type: REQUEST_GALLERY,
    auth: auth,
  };
};
