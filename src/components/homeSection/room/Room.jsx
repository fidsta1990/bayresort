import React, { useEffect } from "react";
import capture from "../../../img/roomBg.jpg";
import * as RoomS from "./roomS";
import { BtnOutline } from "../../buttons/btnStyles";
import AOS from "aos";
import "aos/dist/aos.css";
const Room = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 50 });
  }, []);


  return (
    <RoomS.Wrapper>
      <RoomS.Container>
        <RoomS.CaptureCard data-aos="fade-up">
          <img src={capture} alt="welcome island" className="capture-img" />
        </RoomS.CaptureCard>
        <RoomS.Card data-aos="fade-up">
          <RoomS.SubTitle>Rest & Recooperate</RoomS.SubTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sint
            quos explicabo corporis, nobis iste eaque. Itaque aperiam cupiditate
            animi!
          </p>
          <BtnOutline className="capture-btn">Check In</BtnOutline>
        </RoomS.Card>
      </RoomS.Container>
    </RoomS.Wrapper>
  );
};

export default Room;
