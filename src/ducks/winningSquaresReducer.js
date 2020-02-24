const initialState = [null, null, null];

export const setWinningSquares = (s1, s2, s3) => ({
    type: 'SET_WINNING_SQUARES',
    s1, s2, s3
});

export const clearWinningSquares = () => ({
   type: 'CLEAR_WINNING_SQUARES'
});

const winningSquaresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WINNING_SQUARES':
            const newState = [...state];
            newState[0] = action.s1;
            newState[1] = action.s2;
            newState[2] = action.s3;
            return newState;
        case 'CLEAR_WINNING_SQUARES':
            return [null, null, null];
        default:
            return state;
    }
};

export default winningSquaresReducer;
