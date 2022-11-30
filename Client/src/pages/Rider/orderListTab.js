import React from "react"
import { Tabs } from 'antd';
import DeliveredOrders from "../../component/rider/deliveredOrders";
import ProcessingOrders from "../../component/rider/processingOrders";
import CancelledOrders from "../../component/rider/cancelledOrders";
import { Scrollbars } from 'react-custom-scrollbars-2';

const OrderListTab = () => {
    const onChange = (key) => {
        console.log(key);
      };
    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
                {
                    label: `Delivered`,
                    key: '1',
                    children:
                    <>
                        <Scrollbars style={{ width: '100%', height: 330 }}>
                            <DeliveredOrders />
                            <DeliveredOrders />
                            <DeliveredOrders />
                            <DeliveredOrders />
                        </Scrollbars>
                    </>,
                },
                {
                    label: `Processing`,
                    key: '2',
                    children:
                    <>
                        <Scrollbars style={{ width: '100%', height: 330 }}>
                            <ProcessingOrders />
                            <ProcessingOrders />
                            <ProcessingOrders />
                            <ProcessingOrders />
                        </Scrollbars>
                    </>,
                },
                {
                    label: `Cancelled`,
                    key: '3',
                    children:
                    <>
                        <Scrollbars style={{ width: '100%', height: 330 }}>
                            <CancelledOrders />
                            <CancelledOrders />
                            <CancelledOrders />
                            <CancelledOrders />
                        </Scrollbars>
                    </>,
                },
            ]}
        />
    )
}
export default OrderListTab