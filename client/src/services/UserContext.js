import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();


export function UserProvider({ children }) {


  const savedLocalStorageToken = JSON.parse(localStorage.getItem("token") || "null");
  const [user,setUser]=useState(savedLocalStorageToken);


  const logout=()=>{
    axios
      .post("http://localhost:8000/logout")
      .then((res) => {
        localStorage.setItem('token','')
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  }



    return (
        <UserContext.Provider
          value={{
            
            logout,
            user,
            setUser,
    
            
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export default UserContext;

