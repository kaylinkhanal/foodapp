import React, {useState, useEffect} from 'react'
import Header from '../../component/header/header'
import './food.css'
import FoodList from './foodlist'

const Food = (props)=>{

	const [foods, setFoods] = useState([])

	

	const fetchList = async() => {
		const response = await fetch('http://localhost:4000/Foods')
		const data = await response.json();
		
		if(data){
			setFoods(data.foodList)
		}
	}
	useEffect(()=>{
		fetchList()
  	},[])

	return(

		<>
			<Header/>
			
			<div className='food-section'>
					<div className='container'>
						<h2 className='section_title'>Foods</h2>
						<FoodList foods={foods}/>
					</div>
			</div>
		</>
	)
}

export default Food