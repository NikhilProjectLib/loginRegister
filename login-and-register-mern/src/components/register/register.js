import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
       reEnterPassword:""
    }) 
    const navigate=useNavigate();
    
   const handleChange=(e)=>{
       const {name,value}=e.target
    //    console.log(name,value)
    setUser({
        ...user, 
        [name]:value
    })
   }
   const register=()=>{
    // console.log(user)
    const {name,email,password,reEnterPassword}=user

    //input vallidations check before sending to server
    if(name && email && password && (password==reEnterPassword)){
        axios.post("http://localhost:9002/register",user)
        .then(res=>alert(res.data.message))

    }
    else{
  alert("invalid input")
    }
    
   }
//    

return(
    <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name}  placeholder="Enter your Name"  onChange={handleChange}/>
        <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}/>
         <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
        <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="reEnter password" onChange={handleChange}/>
        <div className="button" onClick={register} >Register </div>
        <div>or</div>
        <div className="button" onClick={()=>navigate("/login")} >Login</div>
    </div>
)
}

export default Register