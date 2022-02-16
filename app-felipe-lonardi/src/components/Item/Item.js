import './Item.css';
import FunctionCounter from '../Counter/counter';

const Item = ({product}) =>{
    return(
        <div className='rotate-scale-up'>
            <div className="foto-producto">
            <h1>{product.name}</h1>
            <img src={product.img} />
            <h2 className='product-price'>${product.price}</h2>
            <FunctionCounter />
            </div>
        </div>
        
    )
}
export default Item