import React, {Component, Fragment} from 'react';
import './App.css';
import {connect} from "react-redux";
import { actionSetName } from './ducks/playersReducer'
import { startGame } from './ducks/gameReadyReducer'
import InputNames from "./components/inputNames";
import Board from "./components/Board";

class App extends Component {
render() {
    return (
        <div className="App">
            <div className='container'>
            {!this.props.gameReady &&
                <Fragment>
                    <InputNames
                        name1={this.props.name1}
                        name2={this.props.name2}
                        actionSetName={this.props.actionSetName}
                    />
                    <button onClick={this.props.startGame}>START</button>
                </Fragment>
                }
                { this.props.gameReady &&
                    <Board />
                }
            </div>
        </div>
        )
    }
};

const mapStateToProps = (state) => ({
    name1: state.players[0],
    name2: state.players[1],
    gameReady: state.gameReady
});

export default connect(mapStateToProps, { actionSetName, startGame })(App);
