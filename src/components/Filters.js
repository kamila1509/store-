import React from "react";
import './Filters.css'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg';


function Filters() {
    return (
        <div className="container">
            <div className="filters-counter">
                <span>16 of 32 products</span>
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
                <ArrowRight></ArrowRight>
            </div>
        </div>
    )
}

export default Filters;