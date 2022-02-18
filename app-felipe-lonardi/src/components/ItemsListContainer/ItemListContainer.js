
import React from 'react'
import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { getProducts } from '../products/product'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })          
    }, [])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )    
    
}
export default ItemListContainer

