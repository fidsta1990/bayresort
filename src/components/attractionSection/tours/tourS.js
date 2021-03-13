import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 3.2rem;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 90vw;
  margin: auto;

  h2 {
    text-align: center;
    margin: 4rem 0rem 6.4rem 0rem;
    letter-spacing: 2px;
    color: #2f47c0;
  }

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

export const TourWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  padding-bottom: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
