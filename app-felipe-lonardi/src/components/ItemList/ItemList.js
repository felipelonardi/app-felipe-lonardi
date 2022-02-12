import Item from "../Item/Item"
import './ItemList.css';

const ItemList = ({products}) => {
    return(
    <div className="Item-list">
        {products.map((product)=>
        <Item product={product} key={product.id}/>
    )}
    </div>

)
}
export default ItemList