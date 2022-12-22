import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

function Home() {
  return (
    <div className="flex-[4_4_0%]">
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}

export default Home;