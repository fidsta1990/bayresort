import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    letter-spacing: 2px;
    color: #2f47c0;
    width: 100%;
    max-width: 500px;
    text-align: center;
    font-weight: 600;
    z-index: 3;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.4rem;
      max-width: 320px;
    }
  }
`;

export const CaptureOneWrapper = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  top: 35%;
  position: absolute;
`;

export const Info = styled.div`
  position: absolute;
  top: 30%;
  right: -20px;
  height: 200px;
  width: 650px;
  background: #fff;
  padding: 1.6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  h4 {
    color: #2f47c0;
    font-weight: 550;
    font-size: 3.2rem;
    letter-spacing: 2px;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;

    &:nth-of-type(2) {
      margin-top: 1.6rem;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 0;
  border-radius: 0.4rem;
  padding: 1.6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 480px;
  height: 630px;
  display: grid;
  justify-content: center;
  img {
    width: 450px;
    height: 600px;
    object-fit: cover;
  }
`;
