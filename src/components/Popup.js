import React from "react";
import './Popup.css'

function Popup(props){
    function handleClick(event) {
        props.setTrigger(false)
        window.location.reload();
    }
    return(props.trigger)?(
        <div className="popup setup-content">
            <div className="popup-container setup-content col-p">
                <div className="popup-inner setup-content col-p">
                    <div className="check-mark-container">
                        <div class="wrapper-popup col "> <svg class="checkmark-popup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>                        
                    </div>

                    <p className="col"><h2>Your figures have been sent.</h2></p>
                    <p className="col">Please wait for an email response.</p>
                    <button className="close-popup-btn button-5" onClick={handleClick}>close</button>   
                </div> 
            </div>
        </div>
    ) : "";
};

export default Popup;
