import React from "react";
import * as AttractS from "./styles/attractionsS";
import Tours from '../components/attractionSection/tours/Tours.jsx'

const Attractions = () => {
  return (
    <>
      <AttractS.Wrapper />
      <Tours/>
    </>
  );
};

export default Attractions;
