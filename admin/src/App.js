import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container flex mt-10">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
