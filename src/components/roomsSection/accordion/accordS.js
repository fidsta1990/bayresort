import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 2.4rem;

  h2 {
    text-align: center;
    margin: 4rem 0rem 6.4rem 0rem;
    letter-spacing: 2px;
    color: #2f47c0;
  }
`;

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr;
    margin-bottom: 4.8rem;
  }
`;

// SINGLE ROOM COMPONENT
export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 2px solid #2f47c0;
  border: 2px solid rgb(47, 71, 192,.7);
  border-radius: 0.4rem;
  margin: 3.2rem auto;
  padding: 1.6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  /* DESKTOP */
  @media (min-width: 1100px) {
    display: flex;
align-items: flex-end;
    max-width: 900px;
    padding: 2.4rem;
  }
`;

export const Header = styled.div`
  h3 {
    text-transform: uppercase;
    line-height: 1.5;
    padding-bottom: 0.8rem;
    color: #2f47c0;
  }

  img {
    width: 100%;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1100px) {
    h3{
      font-size:2.4rem;
    }
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    padding: 0rem 1.6rem;
  }
`;

export const Book = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const Describe = styled.article`
  margin: 1.8rem 0rem;

  span {
    font-weight: bold;
    font-size: 1.4rem;
  }

  p {
    padding: 0.8rem 0rem;
    font-size: 1.2rem;
  }
`;

export const AccordBtn = styled.button`
  padding: 0.8rem 2.2rem;
  background: #2f47c0;
  color: #fff;
  letter-spacing: 2px;
  border: 0;
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
    background: #000;
  }
`;
