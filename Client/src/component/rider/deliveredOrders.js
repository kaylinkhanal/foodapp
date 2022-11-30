import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const DeliveredOrders = ()=>{
    return(
        <>
        <div className='order_card'>
            <span style={{float: 'right'}}>05-12-2022</span>
            <strong>OrderNo. 232235</strong> 
            <p>Tracking Number: dsj42342w</p>
            <p>Qunatity: 3</p>
            <p>Total Amount: Rs.1200</p>
            <button>Detail</button>
            <span className='badge delivered'><FontAwesomeIcon icon={faCheck}/></span>
        </div>
        </>
    )
}
export default DeliveredOrders;