import React from 'react';
import {connect} from "react-redux";

const Scores = ({player1, player2, p1score, p2score}) => {
        return (
            <div className='scores'>
                <div>{player1} (X): {p1score}</div>
                <div>{player2} (O): {p2score}</div>
            </div>
        );
};

const mapStateToProps = (state) => ({
   player1: state.players[0],
   player2: state.players[1],
   p1score: state.scores[0],
   p2score: state.scores[1]
});

export default connect(mapStateToProps)(Scores);
