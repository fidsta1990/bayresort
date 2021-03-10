import styled from "styled-components";
import img from "../../img/bgThree.jpg";

export const Wrapper = styled.section`
  min-height: 70vh;
  background: linear-gradient(rgb(11, 25, 166,.1), rgb(11, 25, 166,.2)),
    url(${img}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    background: #2f47c0;
  }
`;

// #0b19a6;
// rgb(11, 25, 166)
