import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./addProduct.css";
import { useDispatch } from "react-redux";
import { addNewProducts } from "../../redux/actions/productActions";
const AddProduct = ({ setModalStatus }) => {
  const dispatch = useDispatch();
  const [peview, setPeview] = useState("   ");
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      stock: "",
      productImage: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      stock: Yup.string().required("Required"),
      productImage: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(addNewProducts(values));
      setModalStatus(false);
    },
  });
  return (
    <>
      <div className="modal-overly-wrapper">
        <div className="modal-overly-inner">
          <div className="heading-modal">
            <h4>Add New Product</h4>{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => setModalStatus(false)}
            >
              X
            </button>
          </div>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </div>
            <div className="col-12">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>
            <div className="col-12">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                name="stock"
                id="stock"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.stock}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                name="image"
                className="form-control"
                id="image"
                onChange={(event) => {
                  let reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      setFieldValue("productImage", reader.result);
                      setPeview(reader.result);
                    }
                  };
                  reader.readAsDataURL(event.target.files[0]);
                }}
                onBlur={handleBlur}
                value={values.image}
              />
            </div>
            <img src={peview} style={{ width: "100px" }} alt="" />
            <div className="col-4">
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
