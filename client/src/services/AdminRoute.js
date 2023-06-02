import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useContext} from "react";
import UserContext from "../services/UserContext";
 

function AdminRoute() {

    const { user } = useContext(UserContext);



  return (
   user && user.role==="role_admin" ? <Outlet/> : <Navigate to="/notauth"/>
  )
}

export default AdminRoute