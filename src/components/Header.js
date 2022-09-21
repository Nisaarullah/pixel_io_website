import React from 'react'
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>

   <div className='navbar bg-dark text-light'>

    <div className='logo'>
        <h3>Pixel.IO</h3>
    </div>
    <div>
        <ul>
            <li className='text-danger'>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
        </ul>
    </div>
   </div>
    
    </>
  )
}

export default Header