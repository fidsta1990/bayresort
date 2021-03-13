import React from "react";
import * as SingleT from "./singletS";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
// import { BtnSolid } from "../../buttons/btnStyles";

const SingleTour = ({ img, location, reviews, distance, desc }) => {
  return (
    <SingleT.Wrapper>
      <SingleT.Card>
        <SingleT.Image>
          <img src={img} alt={location} />
          <label>{distance}</label>
        </SingleT.Image>
        <h4>{location}</h4>
        <SingleT.Reviews>
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </span>
          <span>{reviews}</span>
        </SingleT.Reviews>
        <p>{desc}</p>
        <SingleT.Btn>Book</SingleT.Btn>
      </SingleT.Card>
    </SingleT.Wrapper>
  );
};

export default SingleTour;
