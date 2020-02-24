import React, { Fragment } from 'react';
import BoardSquare from "./BoardSquare";
import {connect} from "react-redux";
import Scores from "./Scores";
import {handleClearGame} from "../thunks/handleClearGame";

const Board = ({currentPlayer, board, gameFinished, winningSquares, player1, player2, handleClearGame}) => {

    const name = currentPlayer === 'X'
        ? player1 : player2;
    const winningPlayer = gameFinished ? currentPlayer === 'X' ?
        player2 : player1 : null;
    const message = gameFinished ? `${winningPlayer} WINS!` :
        `${name}'s turn to play`;

    return (
        <Fragment>
            <button
                onClick={() => handleClearGame()}
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
                <p>{message}</p>
            </div>
            <Scores/>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    board: state.board,
    currentPlayer: state.currentPlayer,
    player1: state.players[0],
    player2: state.players[1],
    winningSquares: state.winningSquares,
    gameFinished: state.gameFinished
});

export default connect(mapStateToProps, { handleClearGame })(Board);
