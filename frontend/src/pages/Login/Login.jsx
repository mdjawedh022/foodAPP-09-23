import React from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
//     const navigate=useNavigate()
//   const handlereg=()=>{
//     navigate('/register')
//   }
    return (
    <>
      <Header />
      
      <div className="login-wrapper">
      
        <div className="row">
          <div className="col-md-6">
          <div className="lead-text">
        <h1>LOGIN WITH SOCIAL LINKS</h1>
      </div>
            <p>
              If new user <Link to="/register">Register</Link>
            </p>
            <hr />
            <button className="btn btn-danger d-block w-100 mb-2">
              Login eith Google
            </button>
            <button className="btn btn-primary d-block w-100">
              Login with facebook
            </button>
            <hr />
            <form className="row g-3">
              <div className="col-md-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-12">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
              Login Now
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
          <div className="lead-text">
        <h1>NEW CUSTOMER</h1>
      </div>
      <p>By creating an account with us, purchasing on our website becomes much faster and easier.</p>
      <Link to='/register'  className="btn btn-outline-danger">NEW CUSTOMER</Link>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Login;
