import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

function Product() {
  return (
    <div className="product-page-container">
        <Annoucements/>
        <Navbar/>
            <div className="product-wrapper p-50 flex mt-10 mb-10">
                <div className="img-container flex-1">
                    <img className="w-100% object-cover ml-10" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="" />
                </div>
                <div className="info-container flex-1 pt-2 pb-2 pl-20 pr-20">
                    <h1 className="font-semibold">Winter Sweater</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, 
                        veritatis porro commodi, corrupti natus, et consequatur mollitia 
                        cumque perferendis doloremque laudantium! Officia fuga itaque natus 
                        placeat quam veniam labore suscipit.</p>
                    <p className="mt-5">$20</p>
                </div>
            </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product;