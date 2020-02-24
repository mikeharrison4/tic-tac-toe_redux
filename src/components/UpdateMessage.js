import {connect} from "react-redux";
import {inPlayMessage, winningMessage} from "../ducks/messageReducer";

const UpdateMessage = ({currentPlayer, player1, player2, gameFinished, winningMessage, inPlayMessage}) => {
    const name = currentPlayer === 'X'
        ? player1 : player2;
    let winningPlayer;
    if(gameFinished) {
        if(currentPlayer === 'X') {
            winningPlayer = player2
        } else {
            winningPlayer = player1;
        }
        winningMessage(winningPlayer);
    } else {
        inPlayMessage(name);
    }
    return null;
};


const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    player1: state.players[0],
    player2: state.players[1],
    gameFinished: state.gameFinished
});

export default connect(mapStateToProps, { winningMessage, inPlayMessage })(UpdateMessage);
