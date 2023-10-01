import React from 'react'
import "./model.css"
const Modal = ({closeModal}) => {
  return (
    <>
       <div className="bucket-model-wrapper" onClick={closeModal}>
       
      </div>
      <div className="bucket-modal-inner">
          <div className="bucket-modal-head">
            <div className="title bkt-head-content">
              <h5>Your Bucket</h5>
            </div>
            <div className="bucket-counter bkt-head-content">
              <button className="btn btn-danger btn-cart-counter">0</button>
            </div>
            <div className="bucket-total bkt-head-content">
              <span>₹ 0</span>
            </div>
          </div>
          <div className="bucket-modal-body">
            <h4 className="mb-3 mt-3 text-center">Select Delivery Area</h4>
            <form action="" className="delivery-form">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected> </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlFor="floatingSelect">City</label>
              </div>

              <div class="form-floating ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Search area</label>
              </div>
              <button className="btn btn-danger btn-bucket w-100">Next</button>
            </form>
            <div className="bucket-summary">
              <div className="item-detail">
                <h5>some name</h5>
                <p>1 x ₹175</p>
                <p>Select Drink</p>
                <button className="btn btn-outline-danger m-2">+</button>
                <button className="btn btn-outline-danger m-2">-</button>
              </div>
              <div className="price-detail">
                <h5>₹500</h5>
              </div>
            </div>
            <div className="grand-total"><h5>Your Total</h5> <h5>₹500</h5></div>
          </div>
        </div>
    </>
  )
}

export default Modal
