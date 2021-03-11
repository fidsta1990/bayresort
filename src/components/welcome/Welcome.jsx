import React, { useState } from "react";
import { capture1 } from "../../exploreData";
import * as WelcomeS from "./welcomeS";
import capture from "../../img/bgOne.jpg";

const Welcome = () => {
  const [data, setData] = useState(capture1);
  return (
    <WelcomeS.Wrapper>
      <h2 className="title">Welcome to BayResort</h2>
      <WelcomeS.CaptureCard>
        <img src={capture} alt="welcome image" className="capture-img"/>
      </WelcomeS.CaptureCard>
    </WelcomeS.Wrapper>
  );
};

export default Welcome;
