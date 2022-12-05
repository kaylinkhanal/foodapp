import React, {useState, useEffect} from 'react'
import { message, Popconfirm, Modal } from 'antd';
import 'antd/dist/antd.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddRestaurant from '../restaurant/AddRestaurant';
// import AdminSideMenu from './adminSideMenu';

const RestaurantData = ()=>{
    const [restroList, setRestroList] = useState([])
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [selectedItem,setSelectedItem] = useState({})

    const fetchRestaurant = async()=>{
        const response = await fetch('http://localhost:4000/restaurant')
        const data = await response.json()
        
        if(data){
            setRestroList(data.restaurantList)
        }
    }

    useEffect(()=>{
        fetchRestaurant()
    }, [])

    // delete Food data
	const deleteRestro = async (id) => {
		// console.log(id)
		const response = await fetch(`http://localhost:4000/restaurant/${id}`, {
			method: 'Delete'
		})
		const data = await response.json();
		if (data) {
			fetchRestaurant()
		}
	}

    // Popconfirm
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

    return(
        <>
            <Modal title="Update Restaurant Data" open={isEditModalOpen} onCancel={handleCancel} footer={null}>
				<AddRestaurant flag="edit_restro" selectedItem={selectedItem}/>
			</Modal>

			<Modal title="Add New Restaurant" open={isAddModalOpen} onCancel={handleCancel} footer={null}>
				<AddRestaurant/>
			</Modal>

            <div id='restro_datalist' className='top_section'>
				<div className='container'>
					<div className='datatable'>
                        <button onClick={()=> showModalone()}>Add New Restaurant</button>
						<h1>Restaurant Data</h1>
						<table>
							<thead>
								<tr>
									<th>S.N</th>
									<th>Name</th>
									<th>Location</th>
									<th>Category</th>
									<th>Rating</th>
									<th>Edit/Delete</th>
								</tr>
							</thead>
							<tbody>
								{restroList.length > 0 ? restroList.map((restro, id) => {
									return (
										<tr key={restro._id}>
											<td>{id + 1}</td>
											<td>{restro.name}</td>
											<td>{restro.location}</td>
											<td>{restro.category}</td>
											<td>{restro.rating}</td>
											<td>	
												<button className='success' onClick={()=> {showModaltwo(); setSelectedItem(restro)}}><FontAwesomeIcon icon={faPen} /></button>

												<Popconfirm title="Are you sure to delete the food?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No" >
													<button className='cancel' onClick={() => deleteRestro(restro._id)}><FontAwesomeIcon icon={faTrash} /></button>
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

export default RestaurantData