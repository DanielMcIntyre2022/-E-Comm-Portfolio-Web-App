import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from '../../data';
import SmallWidget from "../../components/smallWidget/SmallWidget";
import LargeWidget from "../../components/largeWidget/LargeWidget";

function Home() {
  return (
    <div className="flex-[4_4_0%]">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets flex m-20">
          <SmallWidget/>
          <LargeWidget/>
        </div>
    </div>
  )
}

export default Home;