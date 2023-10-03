import React from 'react'
import {Link}from "react-router-dom";
 const Navbar = () => {
  return (
    <div>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">
              <span data-feather="home" className="align-text-bottom"></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">
              <span data-feather="file" className="align-text-bottom"></span>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              <span data-feather="shopping-cart" className="align-text-bottom"></span>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="users" className="align-text-bottom"></span>
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="bar-chart-2" className="align-text-bottom"></span>
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="layers" className="align-text-bottom"></span>
              Integrations
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <Link className="link-secondary" to="#" aria-label="Add a new report">
            <span data-feather="plus-circle" className="align-text-bottom"></span>
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text" className="align-text-bottom"></span>
              Current month
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text" className="align-text-bottom"></span>
              Last quarter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text" className="align-text-bottom"></span>
              Social engagement
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text" className="align-text-bottom"></span>
              Year-end sale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
