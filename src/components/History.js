import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from "../App";
import "../styles/History.css"

function History() {
    const { redeemHistory } = useContext(shopContext)
    const [screen, setScreen] = useState("");
    useEffect(() => {
        let witdh = window.screen.width
        setScreen(witdh)
    }, [])
    return (<div>
        {screen < 720 ? (
            <div className="modal-cards-container">
                {redeemHistory.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={item.img.url} alt={item.name}></img>
                        <div className="container">
                            <h4><b>{item.name}</b></h4>
                            <p>{item.category}</p>
                            <p>Cost: {item.cost}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        ) :
            (<div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {redeemHistory.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.cost}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>)}
    </div>)
}




export default History;