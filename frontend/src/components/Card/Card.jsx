/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./card.css";
import product from "../../assets/product1.jpg"
const Card = () => {
  return (
    <div className="card-wrapper ">
      <div class="card mb-5">
        <img src={product} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Burgers</h5>
          {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
         <div className="btn-wrapper d-flex">
         < button class="btn btn-outline-danger btn-wrapper">
            ₹ 295/-
          </button>
          <button  class="btn btn-danger btn-wrapper">
            Add to Bucket
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
