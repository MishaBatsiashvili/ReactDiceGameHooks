import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from "./components/Dice";
import GameStatus from "./components/GameStatus";

function App() {

    const [yourScore, setYourScore] = useState(0);
    const [yourDice, setYourDice] = useState(null); // 0(1) - 5(6)

    const [aiScore, setAiScore] = useState(0);
    const [aiDice, setAiDice] = useState(null); // 0(1) - 5(6)

    const [gameStatus, setGameStatus] = useState(null); // 0 - you won; 1-ai won; 2-draw; null game not played yet


    const getRandDices = () => [
        Math.floor(Math.random() * 6), // rand number from 0 - 5
        Math.floor(Math.random() * 6)
    ];

    const onPlayClickHandler = () => {
        //setting new dices
        const [dice1, dice2] = getRandDices();
        setYourDice(dice1);
        setAiDice(dice2);

        //set new score
        if(dice1 > dice2){
            setYourScore(yourScore+1);
            setGameStatus(0);
        } else if(dice2 > dice1){
            setAiScore(aiScore+1);
            setGameStatus(1);
        } else {
            setGameStatus(2);
        }
    }

    // clear all of the state
    const onRestartClickHandler = () => {
        setYourDice(null);
        setAiDice(null);
        setYourScore(0);
        setAiScore(0);

        setGameStatus(null);
    }

    return (
    <div className={'App'}>


        <div className="dices-wrp">
            <Dice playerName={'You'} diceNum={yourDice} score={yourScore} />
            <GameStatus status={gameStatus}/>
            <Dice playerName={'AI'} diceNum={aiDice} score={aiScore} />
        </div>

        <div className={'start-restart-wrp'}>
            <button onClick={onPlayClickHandler} className={'start'}>Play</button>
            <button onClick={onRestartClickHandler} className={'restart'}>Restart</button>
        </div>

    </div>
    );
}

export default App;
