import React from "react";

function OrderComplete() {
    return(
        <>
        <div class="show-complete d-flex flex-column align-items-center justify-content-center">
            <div class="symbol my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="3" fill="green" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-5 h-5" style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </svg>
            </div>
            <div class="text-complete">
                <p>OrderComplete</p>
            </div>
        </div>
        </>
    )
}

export default OrderComplete;
