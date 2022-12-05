import React, { useState, useEffect } from 'react'
import { message, Popconfirm,Modal } from 'antd';
import 'antd/dist/antd.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddFood from '../Food/AddFood';

const FoodData = () => {
	const [foodList, setFoodList] = useState([])
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [selectedItem,setSelectedItem] = useState({})
	

	// Fetch food data
	const fetchFood = async () => {
		const response = await fetch('http://localhost:4000/food');
		const data = await response.json()
		console.log(data)

		if (data) {
			setFoodList(data.foodList)
		} else {
			message.error('Food data is not available')
		}
	}

	useEffect(() => {
		fetchFood()
	}, [])

	// delete Food data
	const deleteFood = async (id) => {
		// console.log(id)
		const response = await fetch(`http://localhost:4000/food/${id}`, {
			method: 'Delete'
		})
		const data = await response.json();
		if (data) {
			fetchFood()
		}
	}

	const confirm = (e) => {
		console.log(e);
		message.success('Food data deleted');
	};
	const cancel = (e) => {
		console.log(e);
		message.error('Cancelled delete');
	};

  // modal
	const showModalone = () => {
		setIsAddModalOpen(true);
	};

	const showModaltwo = () => {
		setIsEditModalOpen(true);
	};

	const handleCancel = () => {
		setIsAddModalOpen(false);
		setIsEditModalOpen(false);
	};


	return (
		<>
			<Modal title="Update Food Data" open={isEditModalOpen} onCancel={handleCancel} footer={null}>
				<AddFood flag="edit_food" selectedItem={selectedItem}/>
			</Modal>

			<Modal title="Add New Food" open={isAddModalOpen} onCancel={handleCancel} footer={null}>
				<AddFood/>
			</Modal>

			<div id='food_datalist' className='top_section'>
				<div className='container'>
					<div className='datatable'>
					<button onClick={()=> showModalone()}>Add New Food</button>
						<h1>Food Data</h1>
						<table>
							<thead>
								<tr>
									<th>S.N</th>
									<th>Name</th>
									<th>Id</th>
									<th>Restaurant</th>
									<th>Category</th>
									<th>Price</th>
									<th>Type</th>
									<th>Edit/Delete</th>
								</tr>
							</thead>
							<tbody>
								{foodList.length > 0 ? foodList.map((food, id) => {
									return (
										<tr key={food._id}>
											<td>{id + 1}</td>
											<td>{food.foodName}</td>
											<td>{food.restaurantName}</td>
											<td>{food._id}</td>
											<td>{food.foodCategory}</td>
											<td>{food.foodPrice}</td>
											<td>{food.foodType}</td>
											<td>
												<button className='success' onClick={()=> {showModaltwo(); setSelectedItem(food)}}><FontAwesomeIcon icon={faPen} /></button>
											
												<Popconfirm title="Are you sure to delete the food?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" >
												<button className='cancel' onClick={() => deleteFood(food._id)}><FontAwesomeIcon icon={faTrash} /></button>
												</Popconfirm>
											</td>
										</tr>
									)
								}) : 'loading...'}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
export default FoodData