import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container flex mt-10">
        <Sidebar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/users' element={<UserList/>}/>
            <Route path='/user/:userId' element={<User/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
