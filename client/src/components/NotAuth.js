import React from 'react'
import {Link} from "react-router-dom"

const NotAuth = () => {
  return (
    <div className='not_auth'>
      <h1>You are not authorized to view this page.</h1>
      <Link className='Link notauth' to="/">Back to Home Page</Link>
      <Link className='Link notauth' to="/login">Login</Link>
    </div>
  )
}

export default NotAuth