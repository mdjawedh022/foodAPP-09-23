/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./card.css";
import product from "../../assets/product1.jpg"
const Card = () => {
  return (
    <div className="card-wrapper ">
      <div className="card mb-5">
        <img src={product} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Burgers</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
         <div className="btn-wrapper d-flex">
         < button className="btn btn-outline-danger btn-wrapper">
            ₹ 295/-
          </button>
          <button  className="btn btn-danger btn-wrapper">
            Add to Bucket
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
