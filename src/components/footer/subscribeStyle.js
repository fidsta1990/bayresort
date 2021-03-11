import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 2.4rem auto;
  max-width: 400px;
  @media (max-width: 768px) {
    max-width: 300px;
    flex-wrap: wrap;
  }
`;

export const FormInput = styled.input`
  margin: 3.2rem auto 0.8rem auto;
  padding: 1.2rem;
  width: 100%;
  max-width: 400px;
  border: 0;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px black;
  }

  &::placeholder {
    letter-spacing: 2px;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    border-radius: 0.8rem;
  }
`;

export const FormBtn = styled.button`
  border: 0;
  background: #000;
  border-radius: 0.8rem;
  cursor: pointer;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 0.8rem 0;
  width: 100%;

  &:hover {
    background: #2f47c0;
    color: #fff;
    box-shadow: 0 0 10px #fff;
  }

  @media (min-width: 768px) {
    max-width: 100px;
    margin-top: 2.4rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 1.23rem 0;
  }
`;