import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 2000,
        },
        {
          name: 'Apr',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'Jun',
          "Active User": 2390,
        },
        {
          name: 'Jul',
          "Active User": 3490,
        },
        {
            name: 'Aug',
            "Active User": 3490,
        },
        {
            name: 'Sep',
            "Active User": 6000,
        },
        {
            name: 'Oct',
            "Active User": 2000,
        },
        {
            name: 'Nov',
            "Active User": 500,
        },
        {
            name: 'Dec',
            "Active User": 3490,
        },
      ];
      
  return (
    <div className="chart-container m-10 p-10 shadow-xl">
        <h3 className="chart-title font-semibold mb-10">User Analytics</h3>
        <ResponsiveContainer className="w-100% aspect-[3/1]">
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;