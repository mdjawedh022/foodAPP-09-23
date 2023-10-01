import React from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("please provide a valid email address")
          .required("Required"),
        password: Yup.string().min(6, "Wrong password").required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="login-wrapper">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in (Admin)</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
          <p className="error">{touched.email&&errors.email?errors.email:null}</p>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
          <p className="error">{touched.password&&errors.password?errors.password:null}</p>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy;2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
