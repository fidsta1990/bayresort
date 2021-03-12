import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 3.2rem;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 90vw;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;
