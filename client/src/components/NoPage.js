import React from 'react'
import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <div className='nopage'>
        <h1 className="nopage_h1">Page Not Found</h1>
        <Link to="/" className="nopage_link Link">Back to Home Page</Link>
    </div>
  )
}
