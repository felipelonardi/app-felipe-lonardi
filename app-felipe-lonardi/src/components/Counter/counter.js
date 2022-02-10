import{useState} from 'react'
import './counter.css'

const FunctionCounter = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (0)

    const decrement = ()=>{
        if (count > 0){
            setCount (count - 1)
        }
    }

    const increment = () => {
        setCount (count + 1)
        if (count >= 5){
            alert("Excede stock disponible")
            setCount (0)
        }
    }

    return (
        <>
            <h3> Function Counter</h3>
            <h3>{count}</h3>
        <div className = 'contenedorBotones'>
            <button className = 'decrement' onClick={decrement}> - </button>
            <button className = 'decrement' onClick={increment}> + </button>
        </div>
        <div>
            <button onClick = {()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
        </>
    )
}

export default FunctionCounter