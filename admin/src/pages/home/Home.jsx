import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from '../../data';
import SmallWidget from "../../components/smallWidget/SmallWidget";
import LargeWidget from "../../components/largeWidget/LargeWidget";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

function Home() {

  const [ userStats, setUserStats ] = useState([]);

  const months = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'Jul',
      'Aug',
      'Oct',
      'Nov',
      'Dec'
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.map(item => {
          setUserStats(prev => [
            ...prev,
            {name: months[item._id-1], 'Active User': item.total}
          ])
        })
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  },[months]);

  return (
    <div className="flex-[4_4_0%]">
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets flex m-20">
          <SmallWidget/>
          <LargeWidget/>
        </div>
    </div>
  )
}

export default Home;