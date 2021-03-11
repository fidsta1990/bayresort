import React from "react";
import capture from "../../../img/foodBg.jpg";
import * as FoodS from "./foodS";
import { BtnOutline } from "../../buttons/btnStyles";

const Food = () => {
  return (
    <FoodS.Wrapper>
      <FoodS.Container>
        <FoodS.CaptureCard>
          <img src={capture} alt="welcome island" className="capture-img" />
        </FoodS.CaptureCard>
        <FoodS.Card>
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
