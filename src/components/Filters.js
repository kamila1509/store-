import React, { useContext } from "react";
import '../styles/Filters.css';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';
import { shopContext } from "../App";
import Data from "../utils/getData.js"


function Filters(props) {
    const { pagination: { next, prev, currentPage, maxPage, jump }, setProducts} = useContext(shopContext)
    async function handleHighest() {
        let product = await Data.getProducts()
        setProducts(product)
        jump(1)
        let filter = product.filter(item => item.cost > 500);
        setProducts(filter)
    }
    async function handleLowest() {
        let product = await Data.getProducts()
        setProducts(product)
        jump(1)
        let filter = product.filter(item => item.cost < 500);
        setProducts(filter)
    }
    async function allProducts() {
        let product = await Data.getProducts()
        jump(1)
        setProducts(product)
    }

    return (
        <div className="container">
            <div className="filters-counter">
                <span>Page {currentPage} of {maxPage}</span>
            </div>
            {props.show && (<div className="filters-buttons">
                <span>Sort by:</span>
                <div className="buttons">
                    <button className="filter-button"
                        onClick={() => {
                            allProducts()
                        }}>All Products</button>
                    <button className="filter-button"
                        onClick={() => {
                            handleLowest()
                        }}>Lowest price</button>
                    <button className="filter-button"
                        onClick={() => {
                            handleHighest()
                        }}
                    >Highest price</button>
                </div>
            </div>)}
            <div className="filters-arrow">
                <ArrowLeft
                    onClick={prev}
                />
                <ArrowRight
                    onClick={next}
                />
            </div>
        </div>
    )
}

export default Filters;