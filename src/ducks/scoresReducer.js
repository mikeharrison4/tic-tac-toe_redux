const initialState = [0, 0];

export const addOneToScore = (player) => ({
    type: 'UPDATE_SCORE',
    player
});

const scoresReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_SCORE':
        const newState = [...state];
        newState[action.player - 1] += 1;
        return newState;
      default:
          return state;
  }
};

export default scoresReducer;
