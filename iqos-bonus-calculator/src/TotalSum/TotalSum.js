import './TotalSum.css'

function TotalSum(props) {

    let totalAmount = props.totalCount * 300;

    return(
        <div className='TotalSum'>
            <h1>Вкупно: {totalAmount} денари </h1>
        </div>
    )
}

export default TotalSum;