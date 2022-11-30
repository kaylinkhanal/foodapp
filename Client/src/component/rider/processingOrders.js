import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const ProcessingOrders = ()=>{
    return(
        <>
        <div className='order_card'>
            <span style={{float: 'right'}}>05-12-2022</span>
            <strong>OrderNo. 232235</strong> 
            <p>Tracking Number: dsj42342w</p>
            <p>Qunatity: 3</p>
            <p>Total Amount: Rs.1200</p>
            <button>Detail</button>
            <span className='badge process'><FontAwesomeIcon icon={faGear}/></span>
        </div>
        </>
    )
}
export default ProcessingOrders;