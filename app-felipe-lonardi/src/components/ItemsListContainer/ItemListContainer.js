
import React from 'react'
import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { getCategories } from '../products/product'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    
    useEffect(() => {
        getCategories(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        
    }, [categoryId])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )    
    
}
export default ItemListContainer

