import './Counter.css'

function Counter(props){
    return(
        <div className='Conter'>
            <h1>{props.count}</h1>
        </div>
    )
}

export default Counter;