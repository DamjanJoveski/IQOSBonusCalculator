import './BonusType.css'
import PlusButton from "../plusButton/PlusButton";
import Counter from "../counter/Counter";
import BonusAmount from "../BonusAmount/BonusAmount";

function BonusType (props) {

    function incrementCounter() {
        props.incrementCounter(props.id);
    }

    return (
        <div className='BonusType'>
            <h2>{props.name}</h2>
            <PlusButton incrementCounter={incrementCounter} />
            <Counter count={props.count} />
            <BonusAmount count={props.count}/>
        </div>
    )
}

export default BonusType;