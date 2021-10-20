// import { } from '../actions/PageActions'

const initialState = {
  name: 'Kat Williams',
  link: '@Williams',
  podilePhoto: require('../../assets/img/ProfileImage.png'),
  country: 'Россия',
  city: 'Санкт-Петербург',
  birthDay: '08 октября 1992',
  status: 'They never ask people to do things they wouldn’t do themselves.',
  workpalce: 'Artist by Passion!',
  studies: 'ВГУЮ в г. Санкт-Петербург',
};

export function selfInfReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
