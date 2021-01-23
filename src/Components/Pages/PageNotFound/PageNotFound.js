import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div className='page'>
      <h1 >
        404
        --
        The page you are trying to reach doesn't exist go to
        Home Page
      </h1>

      <Link to='/' className='btn btn-primary'>Home</Link>
    </div >
  )
}
