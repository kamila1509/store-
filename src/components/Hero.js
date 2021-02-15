import React from "react";
import { ReactComponent as AeroLogo } from '../assets/aerolab-logo.svg';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';
import background from '../assets/header-x1.png';
import './Hero.css'

function Hero(){
    return (
        <React.Fragment>
            <div className="hero-container">
            <div className="hero-logo">
                <AeroLogo></AeroLogo>
            </div>
            <div className="hero-data">
                <span>Julia Col</span>
                <div className="hero-coins">
                    <span>6000</span>
                    <Coin></Coin>
                </div>
            </div>
        </div>
        <div className="hero-background">
            <img src={background} className="hero-background-image"></img>
        </div>
        </React.Fragment>
    );
}

export default Hero;