import React, { useEffect } from "react";
import capture from "../../../img/bgOne.jpg";
import * as ExploreS from "./exploreS";
import { BtnOutline } from "../../buttons/btnStyles";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 50 });
  }, []);

  return (
    <ExploreS.Wrapper>
      <ExploreS.Container>
        <ExploreS.CaptureCard data-aos="fade-up">
          <img src={capture} alt="welcome island" className="capture-img" />
        </ExploreS.CaptureCard>
        <ExploreS.Card data-aos="fade-up">
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
