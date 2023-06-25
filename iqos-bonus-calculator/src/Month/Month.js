import './Month.css'

function Month(props){

    const months = ['Јануари','Февруари','Март','Април','Мај','Јуни','Јули','Август','Септември','Октромври','Ноември','Декември']



    return(
        <div className='Month'>
            <h1>{months[props.monthIndex]}</h1>
        </div>
    )

}

export default Month;