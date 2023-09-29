
import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footers = () => {
  return (
    <div className='footer-wrapper'>
      <img className='footer-logo' src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="" />
        

        <div className="link-wrapper-footer">
   <div className="link-footer-section">
    <ul>
        <li>
            <Link to='/'> Legal</Link>
        </li>
        <li>
            <Link to='/'>Terms and Condition</Link>
        </li>
        <li>
            <Link to='/'>Privacy Policy</Link>
        </li>
        <li>
            <Link to='/'>Caution Notice</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to='/'>KFC India</Link>
        </li>
        <li>
            <Link to='/'>About KFC</Link>
        </li>
        <li>
            <Link to='/'>KFC Care</Link>
        </li>
        <li>
            <Link to='/'>Careers</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to='/'>KFC Food</Link>
        </li>
        <li>
            <Link to='/'>Menu</Link>
        </li>
        <li>
            <Link to='/'>Order Lookup</Link>
        </li>
        <li>
            <Link to='/'>gift Card</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to='/'>Support</Link>
        </li>
        <li>
            <Link to='/'>Get Help</Link>
        </li>
        <li>
            <Link to='/'>Contact Us</Link>
        </li>
        <li>
            <Link to='/'>Privacy Policy</Link>
        </li>
    </ul>
   </div>
   <div className="store-link-section">
<ul><Link to='/'>Find a KFC</Link></ul>
<ul className='store-wrapper'>
    <li><Link><img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="" /></Link></li>
    <li><Link><img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="" /></Link></li>
</ul>
   </div>

        </div>

      <div className="copywriter">
        <p>Copyright © KFC Corporation 2023 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footers
