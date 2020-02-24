const initialState = [null, null, null, null, null, null, null, null, null];

export const actionPlace = (index, playerTurn) => ({
   type: 'PLACE',
   index,
   playerTurn
});

export const clearBoard = () => ({
    type: 'CLEAR'
});

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLACE':
            return state.map((val, index) => {
                return index === action.index ? action.playerTurn : state[index];
            });
        case 'CLEAR':
            return initialState;
        default:
            return state;
        }
};

export default boardReducer;
