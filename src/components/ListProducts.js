import React, { useContext , useState } from "react"
import Card from "../components/Card"
import '../styles/ListProducts.css'
import { shopContext } from "../App";
import Modal from './Modal.js';
import Post from "../utils/postData";
import Data from "../utils/getData.js";
import swal from 'sweetalert';

function ListProducts () {
    const { pagination:{currentData} , currentProduct ,setUser ,setReedemHistory} = useContext(shopContext)
    const [toggleCard , setToggleCard ] = useState(false)
    async function handleAddProducts (id) {
        let data = await Post.addProduct(id)
        setToggleCard(false)
        if(!data.error) {
            swal("Good job!", data.message, "success");
        } else {
            swal("Oh no!", data.error, "error");
        }
        let user = await Data.getUser()
        setUser(user)
        let history = await Data.getHistory()
        setReedemHistory(history)
        
    } 
    return (
      <React.Fragment>
            <div className="product-container">
            {currentData().length !== 0 ? (
                currentData().map((product) => {
                    return (
                        <Card data={product} key={product._id} setToggleCard={setToggleCard}></Card> 
                    );
                })
            ): (
                <progress/>
            )}
        </div>
        {toggleCard ? (
            <Modal title={'Are you sure?'} setToggle={setToggleCard} >
                <div className="options-container">
                    <span onClick={() =>
                            handleAddProducts(currentProduct)
                        }>Yes</span>
                    <span>No</span>
                </div>
            </Modal>
        ): ''}
      </React.Fragment>
        
    )
}

export default ListProducts