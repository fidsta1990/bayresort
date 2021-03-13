import styled from "styled-components";
import { BtnSolid } from "../../buttons/btnStyles";

export const Wrapper = styled.section`
  width: 100%;
  margin: 0rem auto 3.2rem auto;
  display: flex;
  justify-content: center;
  padding: 1.6rem;
`;

export const Card = styled.article`
  background: #fff;
  color: #2f47c0;
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
  box-shadow: 0 0 5px rgb(47, 71, 192, 0.3);
  transition: all 0.2s ease;
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0 0 10px rgb(47, 71, 192, 0.6);
  }

  h4 {
    padding: 1.6rem 0rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  @media (min-width: 900px) {
    max-width: 420px;
  }

  @media (min-width: 1100px) {
    max-width: 320px;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.4rem;
    padding: 0.4rem;
    bottom: 10px;
    left: 15px;
    background: rgba(0, 0, 0, 0.5);
    font-weight: 550;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
  }

  img {
    width: 100%;
  }
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0rem;

  span {
    font-size: 1.6rem;
  }
`;

export const Btn = styled(BtnSolid)`
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
