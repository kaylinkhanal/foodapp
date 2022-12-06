import React, {useState, useEffect} from 'react'
import Header from '../../component/header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RestaurantList from '../restaurant/restaurantList'
import FoodList from '../Food/foodlist'
const HomePage = ()=>{

	const [restaurants, setRestaurants] = useState([])
	const [foods, setFoods] = useState([])

	//console.log(restaurants)

	const fetchList = async() => {
		const response = await fetch('http://localhost:4000/restaurant')
		const data = await response.json();
		if(data){
			setRestaurants(data.restaurantList)
		}
	}

	const fetchFood = async() => {
		const response = await fetch('http://localhost:4000/admin/foods')
		const data = await response.json();
		if(data){
			setFoods(data.details)
		}
	}

	useEffect(()=>{
		fetchList()
		fetchFood()
  	},[])

	return(
		<>
			<Header/>
			<div className='top_section'>
			<div className='form_section'>
					<div className='text_block'>
						<h1>Search <br /> Restaurant or Cuisine</h1>
						<p>Order food from the widest range of restaurants...</p>
					</div>

					<div className='search transparent_bg'>
						<input type="search" placeholder="Enter restaurant name or cuisine"/>
						<button><i><FontAwesomeIcon icon={faSearch}/></i></button>
					</div>
				</div>
			</div>
			<div className='restro_section'>
					<div className='container'>
						<h2 className='section_title'>All Restaurants</h2>
						<RestaurantList restaurants={restaurants}/>
					</div>
			</div>
			<div className='restro_section'>
					<div className='container'>
						<h2 className='section_title'>All Foods</h2>
						<FoodList foods={foods}/>
					</div>
			</div>
		</>
	)
}

export default HomePage