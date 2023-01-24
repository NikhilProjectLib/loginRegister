import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({
   
  })
  return (
    <div className="App">
     
     <Router>
        <Routes>
            {/* <Route exact path="/" element={<Homepage/>}/> */}
            {/* <Route exact path="/">
                {user && user._id?<Homepage/>:<Login/>}
            </Route> */}
            <Route path="/" element={<Homepage/>}/>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
     </Router>
     
      
    </div>
  );
}

export default App;