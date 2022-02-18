import Item from "../Item/Item"
import './ItemDetail.css'
import FunctionCounter from "../Counter/counter";

const ItemDetail = ({ product })  =>{

    return(
        <div className="Item-list">
            <div className='rotate-scale-up'>
                <div className="foto-producto">
                <h1>{product?.name}</h1>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
                <p className="categoria">  Categoria: {product?.category}</p>
                <p className="descripcion"> {product?.description}</p>
                <FunctionCounter />
             </div>
            </div> 
        </div>   
    )
    
    
    }
    
    
    export default ItemDetail;