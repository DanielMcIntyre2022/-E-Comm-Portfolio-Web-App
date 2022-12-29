import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container flex mt-10">
        <Sidebar/>
          <Routes>
            {/* users */}
            <Route exact path='/' element={<Home/>}/>
            <Route path='/users' element={<UserList/>}/>
            <Route path='/user/:userId' element={<User/>}/>
            <Route path='/newUser' element={<NewUser/>}/>
            {/* products */}
            <Route path='/products' element={<ProductList/>}/>
            {/* <Route path='/product/:productId' element={<User/>}/>
            <Route path='/newProduct' element={<NewUser/>}/> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
