import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 100%;
  transition: all 0.2s ease-in;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  border-radius: 0.4rem;

  .btn {
    width: 100%;
    margin: 1.6rem 0rem 0rem;
    padding: 8px 0rem;
    border: 0;
    border-radius: 0.8rem;
    background: #2f47c0;
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 2px;
    font-family: "Quicksand", sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #000;
    }
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }


  @media (max-height: 414px) and (max-width: 846px) {
    bottom: -60px;
  }

  @media (max-height: 360px) and (max-width: 740px) {
    bottom: -160px;
  }

  @media (max-height: 414px) and (max-width: 736px) {
    bottom: -180px;
  }

  @media (max-height: 812px) and (max-width: 375px) {
    bottom: -100px;
    left: 49.9%;
  }

  @media (max-height: 375px) and (max-width: 667px) {
    bottom: -180px;
    left: 49.9%;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    max-width: 900px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding: 0.8rem 0rem;
    font-size: 1.6rem;
  }

  @media (max-height: 414px) {
    label {
      padding: 0;
    }
    margin-bottom: 0.8rem;
  }
`;

export const Date = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: "Quicksand", sans-serif;
  border-radius: 0.8rem;
  border: 1px solid rgb(229, 229, 229);
  cursor: pointer;
  font-weight: 300;

  &:focus {
    border-width: 3px;
    outline: none;
  }

  @media (max-height: 414px) {
    padding: 0;
    margin: 0.4rem 0rem;
  }

  @media (min-width: 768px) {
    max-width: 160px;
  }

  @media (min-width: 1000px) {
    max-width: 200px;
  }
`;

export const Select = styled.select`
  max-width: 100%;
  padding: 0.6rem 1.2rem 1.4rem 0.8rem;
  color: #444;
  line-height: 1.3;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 0.8rem;

  option {
    padding: 0.8rem 0rem;
  }

  @media (max-height: 414px) {
    padding: 0;
  }
`;
