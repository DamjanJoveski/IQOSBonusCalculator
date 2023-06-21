import './App.css';
import './bonusType/BonusType'
import BonusType from "./bonusType/BonusType";

function App() {

  const bonusTypes = ["Продажба на прв уред:","Замени:","Замени со доплата:"];

  return (
      <div className='BonusTypes'>
          {bonusTypes.map((name) => {
             return <BonusType name={name}/>
          })}
      </div>
  );
}

export default App;
