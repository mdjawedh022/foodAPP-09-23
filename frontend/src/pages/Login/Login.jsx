import React from "react";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import { Link } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  //     const navigate=useNavigate()
  //   const handlereg=()=>{
  //     navigate('/register')
  //   }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("please provide a valid email address")
        .required("E-mail Required"),
      password: Yup.string()
        .min(6, "Incorrect password")
        .required("password Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <label htmlFor="iemail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">{touched.email&&errors.email?errors.email:null}</p>
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}

                />
                <p className="error">{touched.password&&errors.password?errors.password:null}</p>
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
            <p>
              By creating an account with us, purchasing on our website becomes
              much faster and easier.
            </p>
            <Link to="/register" className="btn btn-outline-danger">
              NEW CUSTOMER
            </Link>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Login;
