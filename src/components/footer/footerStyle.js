import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  background: linear-gradient(rgb(11, 25, 166, 0.7), rgb(11, 25, 166, 0.75));
  min-height: 20vh;

  .message {
    text-align: center;
    font-size: 1.8rem;
    padding: 1.6rem;
    font-weight: 550;
    letter-spacing: 2px;
    color: #fff;

    &.danger {
      color: coral;
    }

    &.success {
      color: limegreen;
    }
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 340px;
  margin: auto;
  display: grid;
  /* grid-template-columns: 1fr; */
  padding: 2.4rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 800px) {
    max-width: 700px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1100px;
  }

  h4 {
    color: #fff;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  transition: transform 0.2s ease;
  margin: 1.6rem 0;
  text-decoration: none;
  color: #fff;
  margin-left: 2px;

  &:hover {
    transform: scale(1.05);
    font-weight: bold;
  }

  span {
    margin-right: 0.8rem;
  }
`;
