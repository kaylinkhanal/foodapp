import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const ShowHidePassword = (props)=>{
    const [showPassword, setShowPassword] = useState(false)

    return(
        <>
            <div className="input_wrap">
                <i onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}</i>

                <input type={showPassword ? 'text': 'password'} placeholder="Enter Password" {...props.field}></input>
            </div>
        </> 
    )
}
export default ShowHidePassword