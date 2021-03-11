import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;
export const Card = styled.article`
  width: 800px;
  height: 500px;
  background: #fff;
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease-in;

  .close {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 3.2rem;
    cursor: pointer;
    color: #2f47c0;
    text-shadow: 0 0 20px #fff;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;

    @media (max-width: 900px) {
      border-bottom-left-radius: 0;
    }
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 900px;
    height: auto;
    grid-template-columns: 1fr;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  h2 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 1.6rem;
  }

  @media (min-width: 900px) {
    padding-top: 5.6rem;

    h2 {
      font-size: 3.2rem;
    }
    h4 {
      font-size: 2.4rem;
    }
  }
`;
