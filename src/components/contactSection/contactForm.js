import styled from "styled-components";
import { BtnSolid } from "../buttons/btnStyles";

export const Wrapper = styled.section`
  min-height: 80vh;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  h2 {
    margin: 2.4rem;
    color: #2f47c0;
    letter-spacing: 2px;
  }
`;

export const FormCard = styled.form`
  margin: 4rem;
  background: #fff;
  box-shadow: 0 0 5px rgb(47, 71, 192, 0.5);
  border-radius: 0.8rem;
  width: 340px;
  height: 500px;
  padding: 1.6rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px rgb(47, 71, 192, 0.7);
  }

  @media (min-width: 768px) {
    height: 530px;
    width: 450px;
  }
`;

export const FormGroup = styled.div`
  display: block;
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2f47c0;
  padding: 1.6rem 0rem 0.8rem 0rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  padding: 1.6rem 0rem;
  margin-bottom: 0.8rem;
  color: #2f47c0;
  border: 0;
  border-bottom: 2px solid rgb(47, 71, 192, 0.4);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const FormMessage = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  padding: 1.6rem 0rem;
  /* margin-bottom: 0.8rem; */
  color: #2f47c0;
  border: 0;
  border-bottom: 2px solid rgb(47, 71, 192, 0.4);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const FormBtn = styled(BtnSolid)`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
