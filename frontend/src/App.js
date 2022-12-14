import Cart from "./pages/Cart";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from './pages/Register'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Payment from './pages/Payment';
import PaySuccess from './pages/PaySuccess';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/paysuccess' element={<PaySuccess/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
