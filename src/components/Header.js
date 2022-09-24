import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Header()
 {
  return (
   <div className="d-flex  justify-content-around border-bottom bg-secondary p-3 text-light" >
<div className="logo text-xl-start">Logo</div>
<div className="d-flex gap-5">
   <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
   <Link style={{textDecoration:"none" , color:"white"}} to="/about">About</Link>
   <Link  style={{textDecoration:"none", color:"white"}}to="/services">Services</Link>
   <Link style={{textDecoration:"none", color:"white"}} to="/projects">Projects</Link>
   <Link style={{textDecoration:"none", color:"white"}} to="/contacts">Contacts</Link>
</div>
   </div>
   
  );
}

export default Header;