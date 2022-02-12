import './Item.css';

const Item = ({product}) =>{
    return(
        <div className="foto-producto">
            <h1>{product.name}</h1>
            <img src={product.img} />
        </div>
        
    )
}
export default Item