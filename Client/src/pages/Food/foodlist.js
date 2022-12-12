import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"
import { Button, Modal } from 'antd';
import AddFood from './AddFood'
import 'antd/dist/antd.min.css';

const FoodList = () => {

  const [ foodsList, setFoodsList ] = useState( [] )
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
    setFoodsList( data.foodsList )
  }
  
    useEffect( () => {
      fetchData();
    }, [] )
  
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
        { foodsList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { foodsList.map( ( item, id ) => {
            return (
              <React.Fragment key={ id }>
                <div className='food-card'>
                  <div className=''> <img src={require('../../uploads/' + item.foodImage)} alt="" /></div>
                  <div>{ item.foodType }</div>
                  <div>{ item.restaurant }</div>
                  <div>{ item.foodCategory }</div>
                  <Button type="primary" onClick={()=>showModal(item)}>Edit</Button>
                </div>
                </React.Fragment>
              )
          }) }
          </div>
        ) : 'loading...' }
      </>
    )
  
}
  
  export default FoodList