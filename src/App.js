import React from "react";
import Die from "./die.js";
import Confetti from "react-confetti";

export default function App() {
    const { nanoid } = require('nanoid');
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzi, setTenzi] = React.useState(false);
    const [rolls, setRolls] = React.useState(0);

    function allNewDice() {
        const diceArray = [];
        for (let i=0; i<10; i++) {
          diceArray.push({
              value: (Math.floor(Math.random() * 6)+1),
              isHeld: false,
              id: nanoid()
          });
        }
        return diceArray;
    };

    function diceRoll() {
        if (!tenzi) {
          setDice(prev => {
            return prev.map(die => {
                return (die.isHeld) ? die : {
                    value: (Math.floor(Math.random() * 6)+1),
                    isHeld: false,
                    id: nanoid()
                }

            })
          })
          setRolls(prev => prev+1)    
        } else {
            setTenzi(false);
            setDice(allNewDice());
            setRolls(0);
        }
    };

    function holdDice(id) {
        setDice(prev => {
            return prev.map(die => {
                return (die.id === id) ? {...die, isHeld: !die.isHeld} : die
            })
        })
    };

    React.useEffect(() => {
        const allHeld = dice.every(i => i.isHeld);
        const firstValue = dice[0].value;
        const allTheSame = dice.every(i => i.value === firstValue);
        if(allHeld && allTheSame) {
            setTenzi(true);
        }
    }, [dice])

    return(
      <main>
          {tenzi && <Confetti />}
          <h1 className="title">Tenzi Game</h1>
          <p className="instructions">Roll until all the dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="counters">Rolls:<div className="rollcount">{rolls}</div></div>
          <div className="grid">
            {dice.map(item => <Die value={item.value} key={item.id} isHeld={item.isHeld} click={() => holdDice(item.id)} />)}
          </div>
          <button className="rollbutton" onClick={diceRoll}>{tenzi ? "New Game" : "Roll"}</button>
      </main>
    )
}