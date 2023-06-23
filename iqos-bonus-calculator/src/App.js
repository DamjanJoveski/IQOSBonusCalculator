import './App.css';
import BonusType from "./bonusType/BonusType";
import { useState } from "react";
import TotalSum from "./TotalSum/TotalSum";

function App() {
    const [numberOfAcquisitions, setNumberOfAcquisitions] = useState(0);
    const [numberOfSwaps, setNumberOfSwaps] = useState(0);
    const [numberOfSwapsWithFee, setNumberOfSwapsWithFee] = useState(0);

    let TotalCount = numberOfAcquisitions + numberOfSwaps + numberOfSwapsWithFee;

    const bonusTypes = [
        { name: "Продажба на прв уред:", count: numberOfAcquisitions,id:1 },
        { name: "Замени:", count: numberOfSwaps,id:2 },
        { name: "Замени со доплата:", count: numberOfSwapsWithFee,id:3 }
    ];

    function incrementCounter(bonusTypeId) {
        if (bonusTypeId === 1) {
            setNumberOfAcquisitions((prevCount) => prevCount + 1);
        } else if (bonusTypeId === 2) {
            setNumberOfSwaps((prevCount) => prevCount + 1);
        } else if (bonusTypeId === 3) {
            setNumberOfSwapsWithFee((prevCount) => prevCount + 1);
        }
    }

    return (
        <div className='App'>
            {bonusTypes.map((bonusType) => (
                <div className='BonusTypes' >
                    <BonusType id={bonusType.id} name={bonusType.name} count={bonusType.count} incrementCounter={incrementCounter} />
                </div>
            ))}
            <TotalSum totalCount={TotalCount}/>
        </div>
    );
}

export default App;
