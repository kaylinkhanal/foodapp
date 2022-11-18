import React from "react";

const FormText = (props)=>{
    return(
        <>
            <div className="text_block">
                <img src={props.image} alt=""></img>
                <h1>Fast Delivery</h1>
                <p>From any available restaurant...</p>
            </div>
        </>
    )
}
export default FormText