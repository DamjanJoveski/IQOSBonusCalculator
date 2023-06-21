import './App.css';
import './bonusType/BonusType'
import BonusType from "./bonusType/BonusType";
import PlusButton from "./plusButton/PlusButton";
import {Fragment} from "react";
import Counter from "./counter/Counter";

function App() {

  const bonusTypes = ["Продажба на прв уред:","Замени:","Замени со доплата:"];

    return (
        <div className='App'>
            {bonusTypes.map((name) => (
                <Fragment key={name}>
                    <div className='BonusTypes'>
                        <BonusType name={name} />
                    </div>
                    <PlusButton />
                    <div className='Counter'>
                        <Counter/>
                    </div>
                </Fragment>
            ))}
        </div>
    );
}

export default App;
