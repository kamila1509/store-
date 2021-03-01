import React ,{useContext, useEffect, useState}from "react";
import '../styles/Filters.css';
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';
import usePagination from "../hooks/Pagination.js";
import { shopContext } from "../App";
import Data from '../utils/getData.js'


function Filters() {
    const { products, setProducts } = useContext(shopContext)
    const [dataProducts, setDataProducts] = useState("")
    const _DATA = usePagination(dataProducts, 16)
    useEffect(()=>{
         async function GetData () {
            const getProductsData = await Data.getProducts()
            setDataProducts(getProductsData)
            setProducts(_DATA.currentData())
        };
        GetData();
    },[dataProducts]);
    return (
        <div className="container">
            <div className="filters-counter">
                <span>Page {_DATA.currentPage} of {_DATA.maxPage}</span>
            </div>
            <div className="filters-buttons">
                <span>Sort by:</span>
                <div className="buttons">
                    <button className="filter-button">Most Recent</button>
                    <button className="filter-button">Lowest price</button>
                    <button className="filter-button">Highest price</button>
                </div>
            </div>
            <div className="filters-arrow">
                <ArrowLeft
                    onClick={ () => _DATA.prev()}
                />
                <ArrowRight
                    onClick={ () => _DATA.next()}
                />
            </div>
        </div>
    )
}

export default Filters;