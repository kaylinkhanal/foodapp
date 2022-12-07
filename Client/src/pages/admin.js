import React, {useState, useEffect} from 'react'
import Header from '../component/header/header'
// import { Tabs } from 'antd';
// import AddRestro from './AddRestro';
// import AddFood from './AddFood';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.min.css';
import AddFood from './Food/AddFood'
import { useSelector } from 'react-redux'
import Userimage from '../images/dummy.svg'
import {Link} from 'react-router-dom'

const Admin = () => {
    const { email } = useSelector(state => state.users)
    const [foods, setFoods] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

    const [open, setOpen] = useState(false);
    const fetchFood = async () => {
      const response = await fetch("http://localhost:4000/foods");
      const data = await response.json();
      if (data) {
        setFoods(data.foodList);
      }
    };
 
      const handleCancel = () => {
        setOpen(false)
      };
  
    const triggerDelete= async(id)=>{
        const response = await fetch(`http://localhost:4000/foods/${id}`,{
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        
        const data = await response.json()
        if(data.detail.acknowledged){
            fetchFood()
        }
       }

    useEffect(() => {
      fetchFood();
    }, []);
    return(
        <>
            <div id='home_pg' className='full_height'>
                <div className='container'>
                    <div className='main_content'>
                    <div className='user_info'>
                        <img src={Userimage} alt='user'/>
                        <span> Hi {email}</span>
                    </div>

                    {/* <Tabs items={items} /> */}
                    <div className='btn_grp'>
                        <ul className="home_items">
                            <li>
                                <Link to="/admin/restaurant">Add Restaurant</Link>
                            </li>
                            <li>
                                <Link to="/admin/food">Add Food</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div style={{marginLeft:"300px",marginTop: "40px"}}>
     <Modal
        title="Title"
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
       <AddFood fetchFood={fetchFood} flag="edit_food" selectedItem={selectedItem}/>
      </Modal>
      <h2>Food Lists</h2>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Type</th>
              <th>Category</th>
              <th>Restaurant</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th colSpan={2}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {foods.length > 0 ? (
              foods.map((value) => {
                return (
                  <>
                    <tr key={value._id}>
                      <td>{value.foodType}</td>
                      <td>{value.foodCategory}</td>
                      <td>{value.restaurant}</td>
                      <td>{value.FoodName}</td>
                      <td>{value.FoodPrice}</td>
                      {/* s */}
                      <td><button onClick={()=>{
                          setSelectedItem(value)
                          setOpen(true)
                          }}>Edit</button></td>
                      <td><button onClick={()=>triggerDelete(value._id)}>Delete</button></td>
                    </tr>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
                </div>
            </div>
        </>
    )
}
export default Admin