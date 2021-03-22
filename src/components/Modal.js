import React from 'react';
import "../styles/Modal.css"


function Modal(props) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close"
                        onClick={() => {
                            props.setToggle(false);
                      }}
                    >&times;</span>
                    <h2>{props.title}</h2>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default Modal;