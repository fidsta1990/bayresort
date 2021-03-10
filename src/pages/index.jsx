import React from "react";
import * as Style from "./styles/index.js";
import Form from "../components/checkin-form/Form";
import Explore from "../components/explore/Explore.jsx";
import Welcome from "../components/welcome/Welcome.jsx";

const Home = () => {
  return (
    <>
      <Style.Wrapper>
        <Style.Banner>
          <h1>A Spot Of Paradise</h1>
          <h3>BayResort and Spa</h3>
        </Style.Banner>
        <Form />
      </Style.Wrapper>
      <Welcome />
      <Explore />
    </>
  );
};

export default Home;
