import React from "react";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footers from "../../components/Footer/Footers";


const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <Slider />
      <div className="lead-text">
        <h1>SIGNATURE BOXES</h1>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
     <Card/>
     </div>

     <div className="col-md-4">
     <Card/>
     </div>
    
      </div>
     <Footers/>
    </div>
  );
};

export default Home;
