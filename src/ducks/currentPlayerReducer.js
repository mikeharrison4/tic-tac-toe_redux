export const changePlayer = () => ({
  type: 'CHANGE_PLAYER'
});

export const setPlayer = (player) => ({
    type: 'SET_PLAYER',
    player
});

const currentPlayerReducer = (state = 'X', action) => {
    switch (action.type) {
        case 'CHANGE_PLAYER':
            return state === 'X' ? 'O' : 'X';
        case 'SET_PLAYER':
            return action.player;
        default:
            return state;
    }
};

export default currentPlayerReducer;
