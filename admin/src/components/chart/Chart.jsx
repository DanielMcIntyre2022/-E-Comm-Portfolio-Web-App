import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid}) {
      
  return (
    <div className="chart-container m-10 p-10 shadow-xl">
        <h3 className="chart-title font-semibold mb-10">{title}</h3>
        <ResponsiveContainer className="w-100% aspect-[3/1]">
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip/>
                {grid &&  <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5'/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;