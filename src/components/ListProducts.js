import React, {useContext, useEffect} from "react"
import Card from "../components/Card"
import '../styles/ListProducts.css'
import { shopContext } from "../App";
import Data from '../utils/getData.js'

function ListProducts () {
    const { products, setProducts } = useContext(shopContext)
    return (
        <div className="product-container">
            {products ? (
                products.map((product) => {
                    return (
                        <Card data={product} key={product._id}></Card> 
                    );
                })
            ): (
                <p>... Loading</p>
            )}
        </div>
        
    )
}

export default ListProducts