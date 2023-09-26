import React from 'react'
import "./product.css"
import Header from "../../components/Header/Header"
import Footers from '../../components/Footer/Footers'
import Card from '../../components/Card/Card'


const Product = () => {
  return (
    <div className="product-wrapper">
      <Header/>
      <div className="lead-text">
        <h1>SIGNATURE BOXES</h1>
      </div>
      <div className="product-inner pt-5">
     
        <div className="row">
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>

            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
            <div className="col-md-4">
            <Card/>
            </div>
        </div>
      </div>
       <Footers/>
    </div>
  )
}

export default Product
