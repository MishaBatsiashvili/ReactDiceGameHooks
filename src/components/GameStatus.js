import React from "react";

const GameStatus = props => {

    if(props.status !== null){
        let statusText = '';
        let statusClass = '';

        switch (props.status) {
            case 0:
                statusText = 'You Won!';
                statusClass = 'win-status'
                break;
            case 1:
                statusText = 'You Lost';
                statusClass = 'lose-status'
                break;
            case 2:
                statusText = 'Draw';
                statusClass = 'draw-status'
                break;
        }

        return <h3 className={`game-status ${statusClass}`}>{statusText}</h3>
    }

    return null;
}

export default GameStatus;