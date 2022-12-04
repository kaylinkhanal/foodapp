import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"
import { Button, Modal } from 'antd';
import AddFood from './AddFood'
import 'antd/dist/antd.min.css';
const FoodList = () => {

  const { users } = useSelector( state => state );

  const [ foodList, setFoodList ] = useState( [] )
  const [selectedItem,setSelectedItem] = useState({})
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = (item) => {
    setSelectedItem(item)
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const fetchData = async() => {
    const response  = await fetch( 'http://localhost:4000/foods/' )
    const data      = await response.json()
    setFoodList( data.foodList )
  }
  
  useEffect( () => {
    fetchData();
  }, [] )

  const triggerLogout = () => {
    dispatch( resetCredentials() )
    navigate('/')
  }

  
    return (
      <>
      <Modal
        title="Title"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
       <AddFood flag="edit_food" selectedItem={selectedItem}/>
      </Modal>
        { foodList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { foodList.map( ( item, id ) => {
            return (
              <>
                <div className='food-card'>
                  <div className=''><img src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" /></div>
                  <div>{ item.foodType }</div>
                  <div>{ item.restaurant }</div>
                  <div>{ item.foodCategory }</div>
                  <Button type="primary" onClick={()=>showModal(item)}>
      Edit
      </Button>
                </div>
              </>
              )
          }) }
          </div>
        ) : 'loading...' }
      </>
    )
  
  }
  
  export default FoodList