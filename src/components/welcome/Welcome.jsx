import React, { useState } from "react";
import * as WelcomeS from "./welcomeS";
import { BtnOutline } from "../buttons/btnStyles";
import capture from "../../img/bgOne.jpg";

const Welcome = () => {
  return (
    <WelcomeS.Wrapper>
      <WelcomeS.Title className="title">Welcome to BayResort</WelcomeS.Title>
      <WelcomeS.Container>
        <WelcomeS.CaptureCard>
          <img src={capture} alt="welcome island" className="capture-img" />
        </WelcomeS.CaptureCard>
        <WelcomeS.Card>
          <WelcomeS.SubTitle>Explore The Island</WelcomeS.SubTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sint
            quos explicabo corporis, nobis iste eaque. Itaque aperiam cupiditate
            animi!
          </p>
          <BtnOutline className="capture-btn">Book Now</BtnOutline>
        </WelcomeS.Card>
      </WelcomeS.Container>
    </WelcomeS.Wrapper>
  );
};

export default Welcome;
