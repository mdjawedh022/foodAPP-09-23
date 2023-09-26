import React from "react";
import Header from "../Header/Header";
import Footers from "../Footer/Footers";
import img1 from "../../assets/product2.jpg"

const ProductDetail = () => {
  return (
    <div className="product-detail-wrapper">
        <Header/>
     <div className="product-detail-inner pt-5">
     <div className="row">
        <div className="col-md-5">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-7">
          <h3>product title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            iste error aliquam nostrum, quis quidem ex natus vero quibusdam ea
            quasi ducimus id perferendis accusamus facilis harum sint, itaque
            in.
          </p>
        </div>
      </div>
     </div>
      <Footers/>
    </div>
  );
};

export default ProductDetail;
