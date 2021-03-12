import React, { useEffect } from "react";
import capture from "../../../img/captureThree.jpg";
import * as BioS from "./bioS";
import { BtnOutline } from "../../buttons/btnStyles";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 50 });
  }, []);

  return (
    <BioS.Wrapper>
      <BioS.Container>
        <img src={capture} alt="resort capture" className="capture" />
        <BioS.Info>
          <BioS.Title className="title">About Us</BioS.Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam nisi cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            velit odit assumenda nulla necessitatibus ut nesciunt temporibus
            porro aspernatur animi sapiente distinctio incidunt, eos blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quo ipsa accusamus numquam nostrum suscipit quam iste provident.
          </p>
        </BioS.Info>
      </BioS.Container>
    </BioS.Wrapper>
  );
};

export default Explore;
