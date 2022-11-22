import React from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../reducersSlice/userSlice"

const HomePage = () => {

  const dispatch = useDispatch()

  return (
<<<<<<< HEAD:Client/src/component/homepage.js
    <>
      <div>hi i am homepage</div>
      <button className="input-button" type="submit" onClick={ () => dispatch( resetCredentials() ) }>LOGOUT</button>
    </>
=======
    <div>{name}</div>
>>>>>>> 6658e91da6540ddab35693bf4cbcf8a5cbcdafed:Client/src/pages/HomePage.js
  )

}

export default HomePage