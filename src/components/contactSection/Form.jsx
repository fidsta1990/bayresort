import React, { useState, useEffect } from "react";
import * as FormS from "./contactForm";

const Form = () => {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ show: false, msg: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fields.name &&
      fields.email &&
      fields.email.includes("@") &&
      fields.email.includes(".com") &&
      fields.message
    ) {
      const newPerson = { ...fields, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setFields({ name: "", email: "", message: "" });
    } else if (!fields.email.includes(".com") && !fields.email.includes("@")) {
      setError({ show: true, msg: "Incomplete form." });
      setFields({ name: "", email: "", message: "" });
    } else {
      setError({ show: true, msg: "Incomplete form." });
      setFields({ name: "", email: "", message: "" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error.show === true) {
        setError({ show: true });
        setError({ show: false, msg: "" });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <FormS.Wrapper>
      <h2>Get In Touch</h2>
      {error.show && (
        <p className={error.show === true && "danger"}>{error.msg}</p>
      )}
      <FormS.FormCard onSubmit={handleSubmit}>
        <FormS.FormGroup>
          <FormS.FormLabel htmlFor="name">Name:</FormS.FormLabel>
          <FormS.FormControl
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="John Doe"
            value={fields.name}
            onChange={handleChange}
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
            value={fields.email}
            onChange={handleChange}
          />
        </FormS.FormGroup>
        <FormS.FormGroup>
          <FormS.FormLabel>Message:</FormS.FormLabel>
          <FormS.FormMessage
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Hey there..."
            value={fields.message}
            onChange={handleChange}
          ></FormS.FormMessage>
        </FormS.FormGroup>
        <FormS.FormBtn type="submit">Send</FormS.FormBtn>
      </FormS.FormCard>
    </FormS.Wrapper>
  );
};

export default Form;
