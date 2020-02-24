export const setGameFinished = () => ({
   type: 'GAME_WON'
});

export const resetGame = () => ({
    type: 'RESET'
});

const gameWonReducer = (state = false, action) => {
    switch (action.type) {
        case 'GAME_WON':
            return true;
        case 'RESET':
            return false;
        default:
            return state;
    }
};

export default gameWonReducer;
