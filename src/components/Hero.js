import React, {useContext, useState} from "react";
import { ReactComponent as AeroLogo } from '../assets/icons/aerolab-logo.svg';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';
import background from '../assets/header-x1.png';
import '../styles/Hero.css';
import { shopContext } from "../App";
import Modal from "./Modal.js"
import History from "./History.js"
import Data from "../utils/getData.js";
import Post from "../utils/postData";
import swal from 'sweetalert';

function Hero(){
    const { user, setUser } = useContext(shopContext)
    const [toggleCoins, setToggleCoins] = useState(false);
    const [toggleHistory, setToggleHistory] = useState(false);
    async function handleAddCoins (coins) {
        let data = await Post.addCoins(coins)
        setToggleCoins(false)
        swal("Good job!", data.message, "success");
        let user = await Data.getUser()
        setUser(user)
    } 
    
    return (
        <React.Fragment>
            <div className="hero-container">
            <div className="hero-logo">
                <AeroLogo></AeroLogo>
            </div>
            <div className="hero-data">
                <div className="add-coins-container"
                    onClick={() => {
                        setToggleCoins(true)
                  }}>
                    <i className="fa fa-plus-circle icon-add" ></i>
                    <span>Add Coins</span>
                </div>
                {toggleCoins ? (
                <Modal title={"Add more coins"} 
                    setToggle={setToggleCoins}>
                    <div className="points-container">
                        <span onClick={() =>
                            handleAddCoins(1000)
                        }>1000</span>
                        <span onClick={() =>
                            handleAddCoins(5000)
                        }>5000</span>
                        <span onClick={() =>
                            handleAddCoins(7000)
                        }>7000</span>
                    </div>
                </Modal>): ''}
                <div className="history-container"
                    onClick={() => {
                        setToggleHistory(true)
                    }}>
                    <i className="fa fa-history icon-history"></i>
                    <span>History</span>
                </div>
                {toggleHistory ? (
                    <Modal title={'History'} setToggle={setToggleHistory}>
                        <History></History>
                    </Modal>
                 ): ''}
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
            <h1>Electronics</h1>
        </div>
        </React.Fragment>
    );
}

export default Hero;