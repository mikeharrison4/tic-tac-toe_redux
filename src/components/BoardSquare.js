import React from 'react';
import {connect} from "react-redux";
import {handleSquareClicked} from "../thunks/handleSquareClicked";

const BoardSquare = ({handleSquareClicked, index, square, gameFinished, winningSquares}) => {

    return (
        <button
            className='square'
            onClick={() => handleSquareClicked(index)}
            disabled={gameFinished}
            style={ { color: winningSquares.includes(index) && 'green' } }
        >
            {square}
        </button>
    );
};

export default connect(null, { handleSquareClicked })(BoardSquare);
