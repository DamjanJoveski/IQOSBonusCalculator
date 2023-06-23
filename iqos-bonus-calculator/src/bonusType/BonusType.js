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
            <div className='Button'>
                <PlusButton incrementCounter={incrementCounter} />
            </div>
            <div className='Counter'>
                <Counter count={props.count} />
            </div>
            <div className='BonusAmount'>
                <BonusAmount count={props.count}/>
            </div>
        </div>
    )
}

export default BonusType;