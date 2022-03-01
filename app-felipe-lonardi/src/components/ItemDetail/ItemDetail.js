import React, { useState } from "react";
import "./ItemDetail.css";
import FunctionCounter from '../Counter/counter'
import { Link } from "react-router-dom";


const ItemDetail = ({ product, quantity }) => {
const [counter, setCounter] = useState(quantity);

  const onAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} "${product.name}" al carrito!`);
    setCounter(quantity);
  };

  return (
    <div className="Item-list">
        <div className='rotate-scale-up' >
            <div className="foto-producto">
                <h1>{product?.name}</h1>
                <img src={product?.img} alt={product?.name}  className="ItemImg"/>
                <p className="precio">{product?.price}</p>
                <p className="descripcion"> {product?.description}</p>
            </div>
         </div>

      {counter ? (
        <Link to="/cart">
          <button className="checkout">Checkout</button>
        </Link>
      ) : (
        <FunctionCounter stock={product?.stock} initial={1} onAdd={onAdd} className='Function'/>
      )}
    </div>
  );
};

export default ItemDetail;


/*

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
    
    */