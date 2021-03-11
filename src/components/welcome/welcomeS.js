import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 15rem 0rem 0rem 0rem;
  align-items: center;

  @media (min-width: 1024px) {
    margin: 0rem 0rem 5.6rem 0rem;
  }
`;

export const Title = styled.h2`
  color: #2f47c0;
`;

export const Container = styled.article`
  position: relative;
`;

export const CaptureCard = styled.article`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 1.6rem;
  margin: 2.4rem 0rem;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .capture-img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 740px) {
    max-width: 500px;
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (max-height: 375px) and (max-width: 740px) {
    margin: 2.4rem 0rem;
  }

  @media (max-height: 414px) {
    max-width: 600px;
    margin: 5.6rem 0rem;
  }
`;

export const Card = styled.div`
  background: #2f47c0;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 1.6rem;
  padding-bottom: 2.4rem;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  p {
    color: #efefef;
    font-size: 1.6rem;
    padding: 1.6rem 0rem;
    text-align: center;

    line-height: 1.5;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 740px) {
    .capture-btn {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 740px) {
    max-width: 500px;

    p {
      text-align: left;
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    left: -90px;
    bottom: -200px;
    background: linear-gradient(rgb(47, 71, 192, 0.99), rgb(47, 71, 192, 0.92));
  }
`;

export const SubTitle = styled.h4`
  color: #fff;
  font-size: 2.4rem;
  text-align: center;
  margin: 0.8rem 0rem 1.6rem 0rem;

  @media (min-width: 740px) {
    font-size: 3.2rem;
    text-align: left;
  }
`;
