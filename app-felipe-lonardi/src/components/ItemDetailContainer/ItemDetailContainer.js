import React from 'react'
import { useEffect, useState } from 'react';
import FunctionCounter from '../Counter/counter'
import { products } from '../products/product'
import { traerProducto } from '../products/product'
import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item'

const ItemDetailContainer = ({greeting}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProducto
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return(
        <div>
            <h2 className='greeting'>
            {greeting}
            </h2>
            <ItemDetail products = {products}/>
        </div>
        
    )
  
    
}
export default ItemDetailContainer