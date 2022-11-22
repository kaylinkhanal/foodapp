import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
  const {name} = useSelector(state=> state.users)
  return (
    <div>{name}</div>
  )
}

export default HomePage