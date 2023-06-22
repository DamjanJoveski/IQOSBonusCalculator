import './PlusButton.css'

function PlusButton(props) {

    function clickHandler (){
        props.incrementCounter();
    }

    return(
        <div className="PlusButton">
            <button type='button' onClick={clickHandler}><h1>+</h1></button>
        </div>
    )
}

export default PlusButton;