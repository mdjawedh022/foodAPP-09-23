import React from "react";
import "./register.css";
import Header from "../../components/Header/Header";
import Footers from "../../components/Footer/Footers";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email:'',
      password: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First Name Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Last Name Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("E-mail Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("password Required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("city is required"),
      state: Yup.string().required("state is required"),
      zip: Yup.string().required("Zip is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log("Register component rendered");
  return (
    <>
      <Header />
      <div className="lead-text">
        <h1>New Customer</h1>
      </div>
      <div className="register-wrapper pt-5">
        <p>
          Already Registered <Link to="/login">Log in</Link>
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
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            />
            <p className="error">{errors.firstName}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.lastName}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.email}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.password}</p>
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={handleChange}
              value={values.address}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.address}</p>
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              onChange={handleChange}
              value={values.city}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.city}</p>
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
              </label>
            <select
              id="state"
              name="state"
              className="form-select"
              onChange={handleChange}
              value={values.state}
              onBlur={handleBlur}
            >
              {/* <option value={"Bihar"}>Bihar</option>
              <option value={"UP"}>UP</option>
              <option value={"Delhi"}>Delhi</option>
              <option value={"Maharashtra"}>Maharashtra</option> */}
              <option >Bihar</option>
              <option >UP</option>
              <option >Delhi</option>
              <option >Maharashtra</option>
            </select>
            <p className="error">{errors.state}</p>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              onChange={handleChange}
              value={values.zip}
              onBlur={handleBlur}
            />
                        <p className="error">{errors.zip}</p>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
      <Footers />
    </>
  );
};

export default Register;
