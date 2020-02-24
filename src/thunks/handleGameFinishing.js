import {setWinningSquares} from "../ducks/winningSquaresReducer";
import {setGameFinished} from "../ducks/gameWonReducer";
import {addOneToScore} from "../ducks/scoresReducer";

export const handleGameFinishing = (s1, s2, s3) => (dispatch, getState) => {
    dispatch(setWinningSquares(s1, s2, s3));
    dispatch(setGameFinished());
    const winningPlayer = getState().currentPlayer === 'X' ? 2
        : 1;
    dispatch(addOneToScore(winningPlayer));
};
