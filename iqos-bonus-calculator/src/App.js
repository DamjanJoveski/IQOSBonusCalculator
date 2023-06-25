import './App.css';
import BonusType from "./bonusType/BonusType";
import { useEffect, useState } from "react";
import TotalSum from "./TotalSum/TotalSum";
import Month from "./Month/Month";

function App() {
    const [numberOfAcquisitions, setNumberOfAcquisitions] = useState(
        !localStorage.getItem('ACQUISITIONS_VALUES') ? 0 : JSON.parse(localStorage.getItem('ACQUISITIONS_VALUES'))
    );
    const [numberOfSwaps, setNumberOfSwaps] = useState(
        !localStorage.getItem('SWAPS_VALUES') ? 0 : JSON.parse(localStorage.getItem('SWAPS_VALUES'))
    );
    const [numberOfSwapsWithFee, setNumberOfSwapsWithFee] = useState(
        !localStorage.getItem('SWAPS_WITH_FEE_VALUES') ? 0 : JSON.parse(localStorage.getItem('SWAPS_WITH_FEE_VALUES'))
    );

    let TotalCount = numberOfAcquisitions + numberOfSwaps + numberOfSwapsWithFee;

    const bonusTypes = [
        { name: "Продажба на прв уред:", count: numberOfAcquisitions, id: 1 },
        { name: "Замени:", count: numberOfSwaps, id: 2 },
        { name: "Замени со доплата:", count: numberOfSwapsWithFee, id: 3 }
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

    useEffect(() => {
        const acquisition = window.localStorage.getItem('ACQUISITIONS_VALUES');
        const swaps = window.localStorage.getItem('SWAPS_VALUES');
        const swapsWithFee = window.localStorage.getItem('SWAPS_WITH_FEE_VALUES');
        setNumberOfAcquisitions(JSON.parse(acquisition) || 0);
        setNumberOfSwaps(JSON.parse(swaps) || 0);
        setNumberOfSwapsWithFee(JSON.parse(swapsWithFee) || 0);
    }, []);

    useEffect(() => {
        window.localStorage.setItem('ACQUISITIONS_VALUES', JSON.stringify(numberOfAcquisitions));
    }, [numberOfAcquisitions]);

    useEffect(() => {
        window.localStorage.setItem('SWAPS_VALUES', JSON.stringify(numberOfSwaps));
    }, [numberOfSwaps]);

    useEffect(() => {
        window.localStorage.setItem('SWAPS_WITH_FEE_VALUES', JSON.stringify(numberOfSwapsWithFee));
    }, [numberOfSwapsWithFee]);

    return (
        <div>
            <div className='Month'>
                <Month />
            </div>
            <div className='App'>
                {bonusTypes.map((bonusType) => (
                    <div className='BonusTypes' key={bonusType.id}>
                        <BonusType id={bonusType.id} name={bonusType.name} count={bonusType.count} incrementCounter={incrementCounter} />
                    </div>
                ))}
                <TotalSum totalCount={TotalCount} />
            </div>
        </div>
    );
}

export default App;
