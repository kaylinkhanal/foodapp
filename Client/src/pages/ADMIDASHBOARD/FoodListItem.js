import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Link } from "react-router-dom";
import AddFood from "../Food/AddFood";
import { Button, Modal } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import 'antd/dist/antd.min.css';


const FoodListItem = () => {

  const [refresh, setRefresh] = useState(false);
  const [foods, setFoods] = useState([]);

  //for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    console.log("modal");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log("ok");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    console.log("cancel");
    setIsModalOpen(false);
  };
  console.log(isModalOpen);


  const deleteFood= async(id)=>{
    const response = await fetch(`http://localhost:4000/admin/foods/delete/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
     setRefresh(!refresh)
   }


  const fetchFood = async () => {
    const response = await fetch("http://localhost:4000/admin/foods");
    const data = await response.json();
    if (data) {
      setFoods(data.details);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [refresh]);

  return (
    <div style={{marginLeft:"300px",marginTop: "40px"}}>
      <div>
        <Link to="/admin/foods">Add Food</Link>
      </div>
      <h2>Food Lists</h2>
      <Modal footer={null} style={{marginLeft:"400px"}} title="Edit Food" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <AddFood  showModal={showModal}/>

      </Modal>
      <Wrapper>
        <table className="styled-table">
          <thead>
            <tr className="active-row">
              <th>Type</th>
              <th>Category</th>
              <th>Restaurant</th>
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
                      <td><img height="50px" width="100px" src={require(`../../uploads/${value.foodImg}`)} /></td>
                      <td><EditIcon onClick={()=>showModal(value._id)}/></td>
                      <td>< DeleteIcon style={{color:"red"}} onClick={()=>deleteFood(value._id)}/></td>
                    </tr>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.section`

.styled-table{
  border-collapse: collapse;
  margin: 50px 80px;
  font-size: 1.4em;
  font-family: sans-serif;
  width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 2px solid #dddddd;
    background-color: #f3f3f3;

}

.styled-table tbody tr.active-row {
    font-weight: bold;
    border-bottom: 2px solid #009879;
    color: #009879;
}

`



export default FoodListItem;
