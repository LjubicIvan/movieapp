import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const registerData = { firstName, lastName, username, password };
    console.log(registerData);

    axios
      .post("http://localhost:8000/register", registerData)
      .then((res) => {
        res.json(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <form action="" className="register_form" onSubmit={handleRegister}>
        <input
          type="text"
          required
          placeholder="First Name.."
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Last Name.."
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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

        <button className="register_button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <Link to="/login" className="Link">
        <h3>Login</h3>
      </Link>
    </div>
  );
}
