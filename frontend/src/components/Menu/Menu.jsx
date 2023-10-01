/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./menu.css";
import Modal from "../Modal/Modal";

const Menu = () => {
const [isModal,setIsmodal]=useState(false);

  const openModal=()=>{
setIsmodal(true)
  }
  const closeModal=()=>{
    setIsmodal(false)
      }
  return (
    <>
      <div className="menu-wrapper">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <button className="btn btn-danger btn-cart-counter" type="submit" onClick={openModal}>
                0
              </button>
              {/* <button class="header-item-buttons d-flex" tabindex="-1"><span class="headerPrice">₹0</span><img src="//images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="Cart icon animation_100% "/><span class="mobileCartIconCount">0</span></button> */}
            </div>
          </div>
        </nav>
      </div>
    {isModal? <Modal closeModal={closeModal}/>:null}
    </>
  );
};

export default Menu;
