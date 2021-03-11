import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 0rem;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 100vh;
    margin-top: 4rem;
    margin-bottom: 9.6rem;
  }

  @media (min-width: 1024px) {
    margin: 19rem 0rem 9.6rem 0rem;
    padding: 6.4rem 0rem;
  }
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  border: 10px solid #fff;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  p {
    color: #efefef;
    font-size: 1.2rem;
    padding: 1.6rem 0rem;
    text-align: center;
    letter-spacing: 2px;
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
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    left: -90px;
    bottom: -230px;
    background: linear-gradient(rgb(47, 71, 192, 0.99), rgb(47, 71, 192, 0.92));

    p {
      font-size: 1.6rem;
    }
  }
`;

export const SubTitle = styled.h4`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 550;
  text-align: center;
  margin: 0.8rem 0rem 1.6rem 0rem;
  letter-spacing: 2px;

  @media (min-width: 740px) {
    font-size: 3.2rem;
    text-align: left;
  }
`;
