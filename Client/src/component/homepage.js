import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
  const {name} = useSelector(state=> state.users)
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default HomePage