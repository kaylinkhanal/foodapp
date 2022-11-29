import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
  const {name} = useSelector(state=> state.users)
  return (
    <div>hi i am homepage</div>
  )
}

export default HomePage