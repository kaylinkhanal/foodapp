import React from 'react'
import CardImage from '../../images/card_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faLocationDot, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating';

const RestaurantList = (props) => {
	return (
		<div className='card_list'>
			{props.restaurants.length > 0 ? props.restaurants.map((item) => {
				return (
					<div className='card' key={item.name}>
						<div className='card_img'>
							<img src={CardImage} alt="" />
							<h3 className='card_name'>{item.name}</h3>
						</div>
						<div className='card_info'>
							<p className='card_location'><i><FontAwesomeIcon icon={faLocationDot} /></i>{item.location}</p>
							<p className='card_category'><i><FontAwesomeIcon icon={faBowlRice} /></i>{item.category}</p>
							<p className='rating'>
								<i><FontAwesomeIcon icon={faFontAwesome} /></i>
								<Rating name="size-small read-only" value={item.rating} defaultValue={2} precision={0.5} readOnly />
							</p>
						</div>
					</div>
				)
			}) : 'loading'}
		</div>
	)
}
export default RestaurantList