import './BonusAmount.css'

function BonusAmount (props) {

    return (
        <div className='BonusAmount'>
            <h1>{props.count * 300}</h1>
        </div>
    )
}

export default BonusAmount;