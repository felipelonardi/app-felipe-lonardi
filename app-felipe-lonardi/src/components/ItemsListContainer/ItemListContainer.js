import './ItemListContainer.css'
import FunctionCounter from '../Counter/counter'

const ItemListContainer = ({greeting}) => {


    const items = (item) => {
        console.log (item + " item agregado");
    }

    return(
        <div>
            <h2 className='greeting'>
            {greeting}
            </h2>
            <FunctionCounter stock = {5} initial = {0} onAdd={items} />
        </div>
        
    )
  
    
}


export default ItemListContainer