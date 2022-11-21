import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { resetCredentials } from "../reducersSlice/userSlice"

const HomePage = () => {

  const dispatch = useDispatch()

  return (
    <>
      <div>hi i am homepage</div>
      <button className="input-button" type="submit" onClick={ () => dispatch( resetCredentials() ) }>LOGOUT</button>
    </>
  )
  
}

export default HomePage