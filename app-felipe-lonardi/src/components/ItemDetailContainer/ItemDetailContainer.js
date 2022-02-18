
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../products/product'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )    
}
export default ItemDetailContainer

/*
import React from 'react'
import { useEffect, useState } from 'react';
import FunctionCounter from '../Counter/counter'
import { products } from '../products/product'
import { getProduct } from '../products/product'
import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({greeting}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams ()
    

    useEffect(() => {
        getProduct(product.Id)
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
            <ItemDetail product = {product}/>
        </div>
        
    )
  
    
}
export default ItemDetailContainer

*/