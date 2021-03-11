import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 15rem 0rem;
  align-items: center;
  position: relative;

  .title {
    width: 100%;
    text-align: center;
    color: #2f47c0;
    font-size: 2.4rem;
    margin: 4rem 0rem 2.4rem 0rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 4rem;
      max-width: 500px;
    }
  }
  @media (max-height: 360px) {
    .title {
      padding-top: 4.8rem;
    }
  }
  @media (max-height: 414px) {
    padding-top: 9.6rem;

    .title {
      margin-top: 9.6rem;
    }
  }

  @media (max-height: 414px) and (max-width: 736px) {
    .title {
     padding-top: 6.4rem;
    }
  }

`;

export const CaptureCard = styled.article`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 1.6rem;
  margin: 2.4rem 0rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .capture-img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 740px){
    max-width: 500px;
  }

  @media (max-height: 375px) and (max-width: 740px) {
    margin: 2.4rem 0rem;
  }

  @media (max-height: 414px)  {
    max-width: 600px;
    margin: 5.6rem 0rem;
  }

  /* @media (max-height: 375px) and (max-width: 667px) {
    max-width: 600px;

  } */
`;
