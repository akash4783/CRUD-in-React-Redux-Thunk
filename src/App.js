
import './App.css';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import AddUser from './pages/AddUser';
import EditUser from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Adduser" element={<AddUser/>}/>
        <Route path ="/editUser/:id" element={<EditUser/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
