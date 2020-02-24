import {changePlayer} from "../ducks/currentPlayerReducer";
import {actionPlace} from "../ducks/boardReducer";
import {handleGameFinishing} from "./handleGameFinishing";

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const handleSquareClicked = (squareIndex) => (dispatch, getState) => {
    if(getState().board[squareIndex] == null) {
        dispatch(actionPlace(squareIndex, getState().currentPlayer));
        dispatch(changePlayer());
    }

    let squares = getState().board;
    winningCombos.forEach( combo => {
        const [a, b, c] = combo;
        if(squares[a] !== null && squares[a] === squares[b] && squares[b] === squares[c]) {
            dispatch(handleGameFinishing(a, b, c));
        }
    });
};
