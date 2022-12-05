import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddFood from "./AddFood";

const FoodList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, role } = useSelector((state) => state.users);
  const [details, setDetails] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/foods/");
    const data = await response.json();
    setDetails(data.details);
  };

  //for changing state after deleted food item
  const [deleteMsg, setDeleteMsg] = useState(false);


  const deleteFood = async (id) => {
    const response = await fetch(
      `http://localhost:4000/admin/foods/delete/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    //const data=await response.json();
    //console.log(data);
    //window.location.reload(false);
    setDeleteMsg(!deleteMsg);
  };

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:4000/foods/");
    const data = await response.json();
    setDetails(data.details);
  };

  useEffect( () => {
    fetchData();
  }, [] )

  useEffect(() => {
    fetchFoodList();
  }, [deleteMsg]);

  return (
    <>
      <Modal
        title="Title"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <AddFood flag="edit_food" selectedItem={selectedItem} />
      </Modal>

      {details.length > 0 ? (
        <div className="foodapp-res-card-coll">
          {details.map((item,id) => {
            //console.log(item)
            return (
              <div key={item._id} className="foodapp-res-card-item">
                <div>
                  <img src={require(`../../uploads/${item.foodImg}`)} />
                </div>
                <div>{item.foodType}</div>
                <div>{item.restaurant}</div>
                <div>{item.foodCategory}</div>

                {token && role === "admin" ? (
                  <div style={{ textAlign: "center" }}>
                    <Button type="primary" onClick={() => showModal(item)}>
                      Edit
                    </Button>
                    &nbsp;
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
