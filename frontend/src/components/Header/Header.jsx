
import "./header.css";
import React from 'react'
import {Link} from "react-router-dom";
import Menu from "../Menu/Menu";
const Header = () => {
  return (
  <>
   <div className="headerWrapper">
<div className="logo">
  <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" />
</div>
<div className="auth-link">
<ul>
  <li><Link to="/"><i className="bi bi-geo-alt-fill"></i> Store Locator</Link></li>
  <li><Link to="/"><i class="bi bi-person-fill"></i>Signin/Register</Link></li>
  <li><Link to="/">My Account</Link></li>
  <li><Link to="/">Logout</Link></li>
</ul>
</div>
   </div>
 <Menu/>
  </>
  )
}

export default Header