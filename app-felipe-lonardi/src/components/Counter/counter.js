import{useState} from 'react'
import './counter.css'

const FunctionCounter = ({stock = 5, initial = 1, onAdd})=> {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
      if(quantity < stock) {
          setQuantity(quantity+1)
      }
  }

  const decrement = () => {
      if(quantity > 0) {
          setQuantity(quantity - 1)
      }     
  }

  return(
      <div align="center">          
          <table >
              <tbody>
                  <tr>
                      <td align="left"><button className="decrement" onClick={()=> decrement() }>-</button></td>
                      <td align="center" className='decrement'>{quantity}</td>
                      <td align="right"><button className="decrement" onClick={() => increment() }>+</button></td>
                  </tr>
                  <tr>
                      <td align="center" colSpan="5"><button className="agregar-carrito" onClick={onAdd}>Agregar al carrito</button></td>.

                  </tr>

              </tbody>
          </table>    
             
      </div>
      
  )

}

export default FunctionCounter



/*
const FunctionCounter = ({stock = 5, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }
 
    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="decrement" onClick={()=> decrement() }>-</button></td>
                        <td align="center" className='decrement'>{quantity}</td>
                        <td align="right"><button className="decrement" onClick={() => increment() }>+</button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="agregar-carrito" onClick={() => onAdd(    )}>Agregar al carrito</button></td>
                    </tr>

                </tbody>
            </table>       
        </div>
    )
 
 }
*/