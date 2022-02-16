import React from 'react'
import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import FunctionCounter from '../Counter/counter'
import { products } from '../products/product'
import { traerProductos } from '../products/product'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
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
            <ItemList products = {products}/>
        </div>
        
    )
  
    
}
export default ItemListContainer