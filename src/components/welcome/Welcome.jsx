import React, { useState } from "react";
import { capture1 } from "../../exploreData";
import * as WelcomeS from "./welcomeS";

const Welcome = () => {
  const [data, setData] = useState(capture1);
  return (
    <WelcomeS.Wrapper>
      <h2>Welcome to BayResort</h2>
      <WelcomeS.CaptureOneWrapper>
        {data.map((item, idx) => {
          const { image, title, text } = item;
          return (
            <article key={idx} >
              <WelcomeS.Card>
                <img src={image} alt={title} />
              </WelcomeS.Card>
              <WelcomeS.Info>
                <h4>{title}</h4>
                <p>{text}</p>
                <p>{text}</p>
              </WelcomeS.Info>
            </article>
          );
        })}
      </WelcomeS.CaptureOneWrapper>
    </WelcomeS.Wrapper>
  );
};

export default Welcome;
