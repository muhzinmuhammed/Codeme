
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Otp from './Components/Register/otp';
import Login from './Components/Login/Login';

function App() {
  

  return (
    <>
     <Router>
      <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/user_otp" element={<Otp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
     </Router>
      
    </>
  )
}

export default App
