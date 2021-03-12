import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem;
  align-items: center;

  @media (min-width: 948px) {
    min-height: 85vh;
  }
`;

export const Container = styled.article`
  width: 100%;
  max-width: 70vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 2.4rem;

  .capture {
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 0.8rem;
  }

  @media (min-width: 768px) {
    .capture {
      max-width: 700px;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 400px);
    max-width: 90vw;
    gap: 4rem;

    .capture {
      max-width: 400px;
    }
  }
`;

export const Info = styled.article`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 550px;

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 2px;
    text-align: center;
    margin: 0.8rem 0rem;
  }

  @media (min-width: 768px) {
    align-items: center;

    p {
      text-align: left;
      margin: 1.6rem 0rem;
      max-width: 500px;
    }
  }

  @media (min-width: 900px) {
    p {
      max-width: 500px;
    }
  }
`;

export const Title = styled.div`
  color: #2f47c0;
  font-weight: 560;
  letter-spacing: 2px;
  font-size: 3.2rem;
  margin: 0 0 2.4rem 0;
  width: 100%;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 736px) and (max-height: 414px) {
    .title {
      padding: 1.6rem 0rem;
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
