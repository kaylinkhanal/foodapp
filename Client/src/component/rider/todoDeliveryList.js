import React from 'react'

const ToDoDeliveryList = (props)=>{
     
    return(
        <>
            <div className='delivery_list_table'>
                <table>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Mark Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.length > 0 ? props.users.map((user)=>{
                            return(
                                <tr>
                                    <td></td>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className='success'>Delivered</button>
                                        <button className='cancel'>Cancel</button>
                                    </td>
                                    <td>Processing</td>
                                </tr>
                            )
                        }): 'loading...'}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ToDoDeliveryList