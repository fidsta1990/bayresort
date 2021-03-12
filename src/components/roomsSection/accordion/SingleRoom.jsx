import React, { useEffect } from "react";
import * as Single from "./accordS";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleRoom = ({ name, price, img, desc, guests }) => {


  useEffect(() => {
    AOS.init({ duration: 1000, delay: 50 });
  }, []);

  return (
    <Single.CardContainer data-aos="fade-up">
      <Single.Header>
        <h3>{name}</h3>
        <img src={img} alt={name} />
      </Single.Header>
      <Single.Info>
        <Single.Book>
          <p>{price} per night</p>
          <Single.AccordBtn>Reserve</Single.AccordBtn>
        </Single.Book>
        <Single.Describe>
          <p>
            <span>Guests:</span> {guests} persons
          </p>
          <p>
            <span>Desc:</span> {desc}
          </p>
        </Single.Describe>
      </Single.Info>
    </Single.CardContainer>
  );
};



export default SingleRoom;
