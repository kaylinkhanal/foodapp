import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
  const {name} = useSelector(state=> state.users)
  return (
    <div>
        <label>Food Type <input type= 'text' placeholder='Type your food type'></input></label><br/>
        <label>Restaurant <input type= 'text' placeholder='Restaurant Name'></input></label><br/>
        <label>Preferance <select><option>Veg</option><option>NonVeg</option></select></label>
    </div>
  )
}

export default HomePage