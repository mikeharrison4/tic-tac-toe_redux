export const winningMessage = (winningPlayer) => ({
    type: 'WINNING_MESSAGE',
    winningPlayer,
});

export const inPlayMessage = (playerName) => ({
    type: 'INPLAY_MESSAGE',
    playerName
});

const messageReducer = (state = "", action) => {
  switch (action.type) {
      case 'WINNING_MESSAGE':
          return `${action.winningPlayer} WINS!`;
      case 'INPLAY_MESSAGE':
          return `${action.playerName}'s turn to play..`;
      default:
          return state;
  }
};

export default messageReducer;
