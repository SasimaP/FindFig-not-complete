import React from "react";
import Nav from "../Navigation/Nav";
import './OrderComplete.css'

function OrderComplete() {
    return(
        <div id="wrapper-order">
            <header>
                <Nav topic="Order Complete"></Nav>
            </header>
            <main id="main">
                <div className="check-mark-container-or1">
                    <div className="wrapper-order-check col "> <svg className="checkmark-ordercp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        
                        </svg>
                    <h2>Order Complete</h2>
                    </div>  
                                              
                </div>
                
            </main>
        </div>
    )
}

export default OrderComplete;
