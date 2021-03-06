import React, {useState} from 'react';
import './App.css';
import Tries from "../components/Tries/Tries";
import Reset from "../components/Reset/Reset";
import AppField from "../components/AppField/AppField";

function App() {

    const getSquares = () => {
        const squares = [];
        for (let i = 0; i < 36; i++) {
            squares.push({id: i, open: false, hasItem: false});
        }
        let rand = Math.floor(Math.random() * 36);
        squares[rand].hasItem = true;
        return squares;
    }

    const [squareField, setSquareField] = useState(getSquares);
    const [tries, setTries] = useState([{counter: 0}]);


    const openSquare = id => {

        const index = squareField.findIndex(p => p.id === id);
        const newFields = [...squareField];
        const newSquare = {...newFields[index]};
        newSquare.open = true;
        newFields[index] = newSquare;
        setSquareField(newFields);
        if (newFields[index].hasItem) {
            setTimeout(() => {
                alert('You win!');
                clickReset();
            }, 100);
        } else {
            const newTries = [...tries];
            const newCounter = {...newTries[0]};
            if (!squareField[id].open) {
                newCounter.counter = newCounter.counter + 1;
            }
            newTries[0] = newCounter;
            setTries(newTries);
        }

    }

    const clickReset = () => {
        const newTries = [...tries];
        const newCounter = {...newTries[0]};
        newCounter.counter = 0;
        newTries[0] = newCounter;
        setTries(newTries);

        setSquareField(getSquares);
    }

    return (
        <div className="container">
            <AppField content={squareField} click={openSquare} />
            <Tries amount={tries[0].counter}/>
            <Reset game={clickReset}/>
        </div>
    );
}

export default App;
