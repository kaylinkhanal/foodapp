import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FoodList = () => {
  const navigate = useNavigate()
  const { token, role } = useSelector((state) => state.users);
  const [details, setDetails] = useState([]);

  //for changing state after deleted food item
  const [deleteMsg , setDeleteMsg]=useState(false)


  const editFood=(id)=>{
    //console.log(id);
       navigate(`/admin/edit-foods?id=${id}`) 
      }


     const deleteFood= async(id)=>{
      const response = await fetch(`http://localhost:4000/admin/foods/delete/${id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      //const data=await response.json();
       //console.log(data);
       //window.location.reload(false);
       setDeleteMsg(!deleteMsg)
     }

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:4000/admin/foods/");
    const data = await response.json();
    setDetails(data.details);
  };

  useEffect(() => {
    fetchFoodList();
  }, [deleteMsg]);

  return (

    <>
      {details.length > 0 ? (
        <div className="foodapp-res-card-coll">
          {details.map((item) => {
            //console.log(item)
            return (
              <div
                key={item._id}
                className="foodapp-res-card-item"
              >
                <div>
                  <img src={require(`../../uploads/${item.foodImg}`)} />
                </div>
                <div>{item.foodType}</div>
                <div>{item.restaurant}</div>
                <div>{item.foodCategory}</div>

                {token && role === "admin" ? (
                  <div style={{ textAlign: "center" }}>
                    <button  key={item._id}
                  onClick={()=>editFood(item._id)}>Edit</button>&nbsp;
                  <button onClick={() => deleteFood(item._id)}>Delete</button>               
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default FoodList;
