import styled from "styled-components";
import img from "../../img/contactBg.jpg";

export const Wrapper = styled.section`
  display: flex;
  min-height: 60vh;
  background: linear-gradient(rgb(11, 25, 166, 0.3), rgb(11, 25, 166, 0.2)),
    url(${img}) no-repeat center center/cover;
`;
