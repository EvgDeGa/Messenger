const initialState = {
  arrow: 'http://t.me/durov',
  twitter: 'Durov',
  instagram: 'Pavel Durov',
  facebook: 'durov',
  telegram: 'durov',
};

export function socialReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
