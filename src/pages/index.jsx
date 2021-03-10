import React from "react";
import * as Style from "./styles/index.js";
import Form from "../components/checkin-form/Form";

const Home = () => {
  return (
    <Style.Wrapper>
      <div className="banner">{/* booking */}</div>
      <Form />
    </Style.Wrapper>
  );
};

export default Home;
