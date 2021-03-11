import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 0rem;
  align-items: center;

  @media (min-width: 948px) {
  }
`;

export const Container = styled.article`
  width: 100%;
  max-width: 70vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
`;

export const Info = styled.article`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p{
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 2px;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: center;
    p{
      text-align: left;
      font-size: 1.6rem;
      margin: 1.6rem 0rem;
    }
  }
`;

export const Title = styled.div`
  color: #2f47c0;
  font-weight: 560;
  letter-spacing: 2px;
  font-size: 3.2rem;
  margin: 0 0 2.4rem 0;
  @media (min-width: 768px) {
    font-size: 4rem;
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
