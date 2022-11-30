import React, {useState, useEffect} from "react";
import ToDoDeliveryList from "../../component/rider/todoDeliveryList";
import {useSelector} from 'react-redux' 

const DeliveryRequest = () => {
    const [users, setUsers] = useState([])
    const {address} = useSelector(state=> state.users)

    const fetchList = async()=>{
        const response = await fetch('http://localhost:4000/register')
        const data = await response.json()

        if(data){
            setUsers(data.usersList)
        }
    }

    useEffect(()=>{
		fetchList()
  	},[])

    const filterUsers = users.filter((user, id)=>{
        return user.address === address && user.role === 'user'
    })

    console.log(filterUsers, address)

    return (
        <>
            <div id="rider" className="top_section">
                <div className="container">
                    <div className="delivery_request">
                        <h2 className='pg_title'>Delivery Requests</h2>

                        <ToDoDeliveryList users={filterUsers}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeliveryRequest