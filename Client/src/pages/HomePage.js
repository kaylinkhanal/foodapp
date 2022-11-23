import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import Card from '../component/card/card';

const HomePage = () => {
  const [resturantList, setResturantList] = useState([])
  const fetchData = async() => {
    const response = await fetch('http://localhost:4000/restaurants/')
    const data = await response.json();
    setResturantList(data.resturantsList)
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      {resturantList.length>0 ? (
      resturantList.map((item,id)=>{
        return ((<div>
        <Card item={item}/>
        </div>
          
          ))
      })
    ): 
    'loading...'
    }
    </div>
  )
}

export default HomePage