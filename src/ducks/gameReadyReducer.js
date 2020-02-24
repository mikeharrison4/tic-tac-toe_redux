export const startGame = () => ({
    type: 'GAME_READY'
});

const gameReadyReducer = (state = false, action) => {
    switch (action.type) {
        case "GAME_READY":
            return !state;
        default:
            return state;
    }
};

export default gameReadyReducer;
