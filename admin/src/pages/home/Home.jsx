import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from '../../data';

function Home() {
  return (
    <div className="flex-[4_4_0%]">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default Home;