import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js';

function LargeWidget() {

    const Button = ({type}) => {
        return <button className={"large-widget-button " + type} >{type}</button>
    };

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('orders')
                setOrders(res.data)
            } catch (error) {
                console.log(error)     
            }
        };
        getOrders();
    },[]);

  return (
    <div className="large-widget flex-[2_2_0%] shadow-xl p-20">
        <h3 className="large-widget-title text-2xl font-bold">Latest Transactions</h3>
        <table className="large-widget-table w-100% border-spacing-20 mt-10">
            <tr className="large-widget-tr">
                <th className="large-widge-th">Customer</th>
                <th className="large-widge-th">Date</th>
                <th className="large-widge-th">Amount</th>
                <th className="large-widge-th">Status</th>
            </tr>
            {orders.map(order => (
                <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <span className="widget-large-name font-semibold">{order.userId}</span>
                </td>
                <td className="widget-large-date font-light">
                    {format(order.createdAt)}
                </td>
                <td className="widget-large-amount font-light">
                    ${order.amount}
                </td>
                <td className="widget-large-status">
                    <Button type={order.status}/>
                </td>
            </tr>
            ))}  
        </table>
    </div>
  )
}

export default LargeWidget;