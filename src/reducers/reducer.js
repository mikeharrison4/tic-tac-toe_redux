import {combineReducers} from "redux";
import playersReducer from "../ducks/playersReducer";
import scoresReducer from "../ducks/scoresReducer";
import currentPlayerReducer from "../ducks/currentPlayerReducer";
import boardReducer from "../ducks/boardReducer";
import gameReadyReducer from "../ducks/gameReadyReducer";
import winningSquaresReducer from "../ducks/winningSquaresReducer";
import gameWonReducer from "../ducks/gameWonReducer";

export default combineReducers(
    {
        gameReady: gameReadyReducer,
        players: playersReducer,
        scores: scoresReducer,
        currentPlayer: currentPlayerReducer,
        board: boardReducer,
        gameFinished: gameWonReducer,
        winningSquares: winningSquaresReducer
    }
)
