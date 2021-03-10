import styled from "styled-components";
import img from "../../img/bgThree.jpg";

export const Wrapper = styled.section`
  min-height: 70vh;
  background: linear-gradient(rgb(11, 25, 166, 0.1), rgb(11, 25, 166, 0.2)),
    url(${img}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    background: #2f47c0;
  }
`;

export const Banner = styled.article`
  color: #efefef;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 100%;
  max-width: 340px;

  h1 {
    font-weight: 450;
    line-height: 1.5;
    font-size: 2.4rem;
    text-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
  }

  h3 {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.6rem;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// #0b19a6;
// rgb(11, 25, 166)
