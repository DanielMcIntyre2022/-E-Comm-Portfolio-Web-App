
function LargeWidget() {

    const Button = ({type}) => {
        return <button className={"large-widget-button " + type} >{type}</button>
    };

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
            <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <img className="widget-large-image rounded-full w-10 h-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"/>
                    <span className="widget-large-name font-semibold">Daniel McIntyre</span>
                </td>
                <td className="widget-large-date font-light">
                    22 Dec 2022
                </td>
                <td className="widget-large-amount font-light">
                    $122.00
                </td>
                <td className="widget-large-status">
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <img className="widget-large-image rounded-full w-10 h-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"/>
                    <span className="widget-large-name font-semibold">Daniel McIntyre</span>
                </td>
                <td className="widget-large-date font-light">
                    22 Dec 2022
                </td>
                <td className="widget-large-amount font-light">
                    $122.00
                </td>
                <td className="widget-large-status">
                    <Button type="Declined"/>
                </td>
            </tr>
            <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <img className="widget-large-image rounded-full w-10 h-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU" />
                    <span className="widget-large-name font-semibold">Daniel McIntyre</span>
                </td>
                <td className="widget-large-date font-light">
                    22 Dec 2022
                </td>
                <td className="widget-large-amount font-light">
                    $122.00
                </td>
                <td className="widget-large-status">
                    <Button type="Pending"/>
                </td>
            </tr>
            <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <img className="widget-large-image rounded-full w-10 h-10 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"/>
                    <span className="widget-large-name font-semibold">Daniel McIntyre</span>
                </td>
                <td className="widget-large-date font-light">
                    22 Dec 2022
                </td>
                <td className="widget-large-amount font-light">
                    $122.00
                </td>
                <td className="widget-large-status">
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default LargeWidget;