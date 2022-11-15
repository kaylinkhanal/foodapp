import React from "react";
import Image from '../images/delivery_girl.svg'

const FormText = ()=>{
    return(
        <>
            <div className="text_block">
                <img src={Image} alt=""></img>
                <h1>Fast Delivery</h1>
                <p>From any available restaurant...</p>
            </div>
        </>
    )
}
export default FormText