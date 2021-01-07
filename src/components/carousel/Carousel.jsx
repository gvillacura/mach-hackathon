import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import movistar from "../../img/movistar.png"
import houseBar from "../../img/houseBar.png";
import cabify from "../../img/cabify.png";
import lippi from "../../img/lippi.png";
import rappi from "../../img/rappi.png";
import aka from "../../img/aka.png";


const Carousel = () => {
     let settings = {
       dots: false,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 2,
     };
  return (
    <Slider {...settings}>
      <div className="category">
        <img src={movistar} alt="Movistar" />
      </div>
      <div className="category">
        <img src={houseBar} alt="houseBar" />
      </div>
      <div className="category">
        <img src={cabify} alt="cabify" />
      </div>
      <div className="category">
        <img src={lippi} alt="lippi" />
      </div>
      <div className="category">
        <img src={rappi} alt="rappi" />
      </div>
      <div className="category">
        <img src={aka} alt="aka" />
      </div>
    </Slider>
  );}

export default Carousel;


