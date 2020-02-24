import React from 'react';

function InputNames(props) {
    return (
        <div className='inputs'>
            <div>
                <label>Player 1: </label>
                <input
                    type="text"
                    value={props.name1}
                    onChange={(e) => props.actionSetName(1, e.target.value)}
                />
            </div>
            <div>
                <label>Player 2: </label>
                <input
                    type="text"
                    value={props.name2}
                    onChange={(e) => props.actionSetName(2, e.target.value)}
                />
            </div>
        </div>
    );
};

export default InputNames;
