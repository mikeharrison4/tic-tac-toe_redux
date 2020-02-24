import React, {Component} from 'react';

class InputNames extends Component {
    render() {
        return (
            <div className='inputs'>
                <div>
                    <label>Player 1: </label>
                    <input
                        type="text"
                        value={this.props.name1}
                        onChange={(e) => this.props.actionSetName(1, e.target.value)}
                    />
                </div>
                <div>
                    <label>Player 2: </label>
                    <input
                        type="text"
                        value={this.props.name2}
                        onChange={(e) => this.props.actionSetName(2, e.target.value)}
                    />
                </div>
            </div>
        );
    }
};

export default InputNames;
