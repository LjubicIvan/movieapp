import React, {  useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext} from "react";
import UserContext from "../services/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const {setUser}=useContext(UserContext);

  
  const handleLogin = (e) => {
    e.preventDefault();
    const loginData={username,password}
    axios
      .post("http://localhost:8000/login", loginData)
      .then((res) => {
        localStorage.setItem('token',JSON.stringify(res.data))
        res.JSON().then(userInfo=>{
          setUser(userInfo)
          
        })
        window.location.reload()
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  
  

  return (
    <div className="login">
      <form action="" className="login_form" onSubmit={handleLogin}>
        <input
          type="text"
          required
          placeholder="Username.."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        
        <input
          type="password"
          required
          placeholder="Password.."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="register_button" onClick={handleLogin}>
          Login
        </button>
      </form>




      <Link to="/register" className="Link">
        <h3>Register</h3>
      </Link>
    </div>
  );
}
