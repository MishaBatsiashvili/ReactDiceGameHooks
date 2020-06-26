import React from "react";
import dice1 from '../assets/dice-1.png';
import dice2 from '../assets/dice-2.png';
import dice3 from '../assets/dice-3.png';
import dice4 from '../assets/dice-4.png';
import dice5 from '../assets/dice-5.png';
import dice6 from '../assets/dice-6.png';
import placeHolderDice from '../assets/no-dice.png'

const diceImgsArr = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = props => {


    return (
    <div className="dice-wrp">
        <div className={'player-name'}>{props.playerName}: {props.score}</div>
        {props.diceNum !== null
            ? <img src={diceImgsArr[props.diceNum]} className="dice-img" />
            : <img src={placeHolderDice} className="dice-img" />
        }
    </div>
    )
}

export default Dice;