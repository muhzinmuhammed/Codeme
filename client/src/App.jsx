
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';

function App() {
  

  return (
    <>
     <Router>
      <Routes>
      <Route path="/signup" element={<Register />} />
      </Routes>
     </Router>
      
    </>
  )
}

export default App
