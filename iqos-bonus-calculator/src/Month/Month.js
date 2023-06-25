import './Month.css'

function Month(props){

    const months = ['Јануари','Февруари','Март','Април','Мај','Јуни','Јули','Август','Септември','Октромври','Ноември','Декември']

    let today = new Date();
    let monthIndex = today.getMonth()

    return(
        <div className='Month'>
            <h1>{months[monthIndex]}</h1>
        </div>
    )

}

export default Month;