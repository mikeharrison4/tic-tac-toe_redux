import {clearBoard} from "../ducks/boardReducer";
import {resetGame} from "../ducks/gameWonReducer";
import {clearWinningSquares} from "../ducks/winningSquaresReducer";
import {setPlayer} from "../ducks/currentPlayerReducer";

export const handleClearGame = () => (dispatch) => {
    dispatch(clearBoard());
    dispatch(clearWinningSquares());
    dispatch(resetGame());
    dispatch(setPlayer('X'));
};
