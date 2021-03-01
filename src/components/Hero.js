import React, { useEffect , useContext} from "react";
import { ReactComponent as AeroLogo } from '../assets/icons/aerolab-logo.svg';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';
import background from '../assets/header-x1.png';
import '../styles/Hero.css';
import { shopContext } from "../App";
import Data from '../utils/getData.js'

function Hero(){
    const { user , setUser } = useContext(shopContext)

     useEffect(()=>{
        const getData = async () => {
            const getUserData = await Data.getUser()
            setUser(getUserData)
        };
        getData();
    }, []);
    
    return (
        <React.Fragment>
            <div className="hero-container">
            <div className="hero-logo">
                <AeroLogo></AeroLogo>
            </div>
            <div className="hero-data">
                <span>{user ? user.name: ''}</span>
                <div className="hero-coins">
                    <span>{user ? user.points : ''}</span>
                    <Coin></Coin>
                </div>
            </div>
        </div>
        <div className="hero-background">
            <img alt="background" src={background} className="hero-background-image"></img>
        </div>
        </React.Fragment>
    );
}

export default Hero;