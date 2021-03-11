import React, { useEffect } from "react";
import capture from "../../../img/foodBg.jpg";
import * as FoodS from "./foodS";
import { BtnOutline } from "../../buttons/btnStyles";

import AOS from "aos";
import "aos/dist/aos.css";
const Food = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 50 });
  }, []);
  return (
    <FoodS.Wrapper>
      <FoodS.Container>
        <FoodS.CaptureCard data-aos="fade-left">
          <img src={capture} alt="welcome island" className="capture-img" />
        </FoodS.CaptureCard>
        <FoodS.Card data-aos="fade-left">
          <FoodS.SubTitle>Best Cuisine</FoodS.SubTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sint
            quos explicabo corporis, nobis iste eaque. Itaque aperiam cupiditate
            animi!
          </p>
          <BtnOutline className="capture-btn">Book Now</BtnOutline>
        </FoodS.Card>
      </FoodS.Container>
    </FoodS.Wrapper>
  );
};

export default Food;
