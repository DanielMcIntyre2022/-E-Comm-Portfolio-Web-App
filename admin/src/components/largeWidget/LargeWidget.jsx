
function LargeWidget() {
  return (
    <div className="large-widget flex-[2_2_0%] shadow-xl p-20">
        <h3 className="large-widget-title text-2xl font-bold">Latest Transactions</h3>
        <table className="large-widget-table">
            <tr className="large-widget-tr">
                <th className="large-widge-th">Customer</th>
                <th className="large-widge-th">Date</th>
                <th className="large-widge-th">Amount</th>
                <th className="large-widge-th">Status</th>
            </tr>
            <tr className="widget-large-tr">
                <td className="widget-large-user">
                    <img className="widget-large-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"/>
                    <span className="widget-large-name">Daniel McIntyre</span>
                </td>
                <td className="widget-large-date">
                    22 Dec 2022
                </td>
                <td className="widget-large-amount">
                    $122.00
                </td>
                <td className="widget-large-status">
                    
                </td>
            </tr>
        </table>
    </div>
  )
}

export default LargeWidget;