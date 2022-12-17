import './App.css';
import {BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import { useState } from 'react';
import Navbar from './Components/Navbar/navbar'
import ModelsPage from './Pages/Model_Selection/ModelsPage';
function App() {
  const [UserId,setUserId] = useState(null);
  return (
    <div className="App">
      <div className="wrapper vcenter-item"> 
      <Navbar/>
          <Routes>
            <Route path='/' element={<ModelsPage/>}/>
          </Routes>
      </div>
    </div>
  );
}
export default App;
