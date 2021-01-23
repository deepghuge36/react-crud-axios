import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import './style.css'
function Navbar() {
  return (
    <div>
      <div className='d-flex conatiner navbar'>
        <h1 className='heading' >Task</h1>
        <Link className='h2' to='/'>Home</Link>
      </div>
      <hr></hr>
    </div>

  )
}

export default Navbar
