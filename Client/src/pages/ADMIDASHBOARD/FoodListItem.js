import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FoodListItem = () => {
  const [refresh, setRefresh] = useState(false);
  const [foods, setFoods] = useState([]);

  const deleteFood= async(id)=>{
    const response = await fetch(`http://localhost:4000/admin/foods/delete/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
     setRefresh(!refresh)
   }

   const editFood =async(id)=>{
    const response = await fetch(`http://localhost:4000/admin/foods/update/${id}`,{
    method: 'PUT',
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
      <div>
        <table border="1">
          <thead>
            <tr>
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
                console.log(value);
                return (
                  <>
                    <tr key={value._id}>
                      <td>{value.foodType}</td>
                      <td>{value.foodCategory}</td>
                      <td>{value.restaurant}</td>
                      <td><img height="50px" width="50px" src={require(`../../uploads/${value.foodImg}`)} /></td>
                      <td><button onClick={()=>editFood(value._id)}>Edit</button></td>
                      <td><button onClick={()=>deleteFood(value._id)}>Delete</button></td>
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
  );
};
export default FoodListItem;
