import styled from "styled-components";

export const BtnOutline = styled.button`
  background: transparent;
  border: 2px solid #fff;
  transition: all 0.2s ease;
  color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  width: 100%;
  padding: 0.8rem 0rem;
  border-radius: 0.8rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 2px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    color: #2f47c0;
    background: #fff;
  }

  @media (min-width: 768px) {
    max-width: 200px;
    margin: 0.8rem 0rem 1.6rem 0rem;
  }
`;

export const BtnSolid = styled.button`
  margin-top: 1.6rem;
  padding: 0.8rem 0rem;
  border: 0;
  border-radius: 0.8rem;
  background: #2f47c0;
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 2px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    color: #fff;
    background: #000;
  }

  @media (min-width: 768px) {
    max-width: 200px;
    margin: 3.2rem 0rem 1.6rem 0rem;
  }
`;
