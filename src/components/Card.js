import React, { useContext  }from "react";
import buyIcon from '../assets/icons/buy-blue.svg'
import buyIconHover from '../assets/icons/buy-white.svg'
import coin from '../assets/icons/coin.svg'
import '../styles/Card.css';
import { shopContext } from "../App";

function Card(props) {
    const { user , setCurrentProduct } = useContext(shopContext)
    return (
        <div className="card-container">
           {user && user.points<props.data.cost ? 
           (<div className="card-more-coins">
                <span>You need {props.data.cost-user.points}</span>
                <img alt='coin' src={coin}></img>
            </div>):
            (<img alt="shop-icon" src={buyIcon} className="card-buy-icon"></img>)}
           <div className="card-image-container">
                <img alt={props.data.name} src={props.data.img.url} className="card-image"></img>
           </div>
           <div className="card-information">
               <span className="card-information-category">{props.data.category}</span>
               <p className="card-information-name">{props.data.name}</p>
           </div>
           {user && user.points<props.data.cost ? (''): (<div className="card-hover">
                <img alt="shop-icon" src={buyIconHover} className="card-buy-icon"></img>
                <div className="card-reddem-container">
                    <div className="card-price-coins">
                        <span>{props.data.cost}</span>
                        <img alt="coin" src={coin}></img>
                    </div>
                    <div className="card-reddem-button"
                        onClick={() => {
                            props.setToggleCard(true)
                            setCurrentProduct(props.data._id)
                      }}
                    >Redeem now</div>
                </div>
           </div>) }
        </div>
    )
}

export default Card