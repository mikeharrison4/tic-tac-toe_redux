const initialState = ['', ''];

export const actionSetName = (player, name) => ({
  type: 'SET_NAME',
  player,
  name
});

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      const newState = [...state];
      newState[action.player - 1] = action.name;
      return newState;
    default:
      return state;
  }
};

export default playersReducer;
