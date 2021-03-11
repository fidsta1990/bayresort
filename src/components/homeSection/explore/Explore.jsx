import React from "react";
import capture from "../../../img/bgOne.jpg";
import * as ExploreS from "./exploreS";
import { BtnOutline } from "../../buttons/btnStyles";

const Explore = () => {
  return (
    <ExploreS.Wrapper>
      <ExploreS.Container>
        <ExploreS.CaptureCard>
          <img src={capture} alt="welcome island" className="capture-img" />
        </ExploreS.CaptureCard>
        <ExploreS.Card>
          <ExploreS.SubTitle>Explore The Island</ExploreS.SubTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sint
            quos explicabo corporis, nobis iste eaque. Itaque aperiam cupiditate
            animi!
          </p>
          <BtnOutline className="capture-btn">Book Now</BtnOutline>
        </ExploreS.Card>
      </ExploreS.Container>
    </ExploreS.Wrapper>
  );
};

export default Explore;
