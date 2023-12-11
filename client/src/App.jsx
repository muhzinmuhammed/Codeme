
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Otp from './Components/Register/otp';
import Login from './Components/Login/Login';
import UserPage from './Pages/UserPage';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminUsers from './Pages/Admin/AdminUsers';
import AddQuizPage from './Pages/Admin/AddQuizPage';

function App() {
  

  return (
    <>
     <Router>
      <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/user_otp" element={<Otp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<UserPage />} />
      <Route path='/admin_login' element={<AdminLogin/>}/>
      <Route path='/user_view' element={<AdminUsers/>} />
      <Route path='/add_quiz' element={<AddQuizPage/>} />
      </Routes>
     </Router>
      
    </>
  )
}

export default App
