import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import NewsLetter from "../components/Newsletter";

function Home() {
  return (
    <div>
    <Annoucements/>
    <Navbar/>
    <Slider/>
    <Catergories/>
    <Products/>
    <NewsLetter/>
    </div>
  )
}

export default Home;