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

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  border: 2px solid #2f47c0;
  border-radius: 0.4rem;
  margin: 3.2rem auto;
  padding: 1.6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

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
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
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
