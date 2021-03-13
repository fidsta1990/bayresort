import React from "react";
import * as FormS from "./contactForm";

const Form = () => {
  return (
    <FormS.Wrapper>
      <h2>Get In Touch</h2>
      <FormS.FormCard>
        <FormS.FormGroup>
          <FormS.FormLabel htmlFor="name">Name:</FormS.FormLabel>
          <FormS.FormControl
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="John Doe"
          />
        </FormS.FormGroup>
        <FormS.FormGroup>
          <FormS.FormLabel htmlFor="email">Email:</FormS.FormLabel>
          <FormS.FormControl
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </FormS.FormGroup>
        <FormS.FormGroup>
          <FormS.FormLabel>Message:</FormS.FormLabel>
          <FormS.FormMessage
            name="message"
            id="message"
            cols="30"
            rows="7"
          ></FormS.FormMessage>
        </FormS.FormGroup>
        <FormS.FormBtn>Send</FormS.FormBtn>
      </FormS.FormCard>
    </FormS.Wrapper>
  );
};

export default Form;
