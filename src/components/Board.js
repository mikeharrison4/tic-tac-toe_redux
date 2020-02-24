import React, { Fragment } from 'react';
import BoardSquare from "./BoardSquare";
import {connect} from "react-redux";
import Scores from "./Scores";
import {handleClearGame} from "../thunks/handleClearGame";
import {inPlayMessage, winningMessage} from "../ducks/messageReducer";
import UpdateMessage from "./UpdateMessage";

const Board = ({board, gameFinished, winningSquares, handleClearGame, displayMessage}) => {
    return (
        <Fragment>
            <UpdateMessage />
            <button
                onClick={handleClearGame}
                disabled={!gameFinished}
            >
                Clear
            </button>
            <div className='board'>
                {board.map( (square, index) => (
                    <BoardSquare
                        key={index}
                        square={square}
                        index={index}
                        gameFinished={gameFinished}
                        winningSquares={winningSquares}
                    />
                ) )}
            </div>
            <div className='instructions'>
                <p>{displayMessage}</p>
            </div>
            <Scores/>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    board: state.board,
    winningSquares: state.winningSquares,
    gameFinished: state.gameFinished,
    displayMessage: state.message
});

export default connect(mapStateToProps, { winningMessage, inPlayMessage, handleClearGame })(Board);
