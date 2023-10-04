import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../../components/AddProduct/AddProduct";
const Product = () => {
  const [modalStatus,setModalStatus]=useState(false);

const handlemodel=()=>{
  setModalStatus(true)
}

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary"  onClick={handlemodel}>
            Add New
            </button>
          </div>
        </div>
      </div>

     
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.data &&
              products.data.map((product, i)=>{
                // ...
                return <tr key={product._id}>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>{" "}
                    <button className="btn btn-primary">Update</button>
                  </td>
                </tr>;
             })}
          </tbody>
        </table>
      </div>
    </main>
  {modalStatus ?  <AddProduct  setModalStatus={setModalStatus}/>:null}
    </>
  );
};

export default Product;
