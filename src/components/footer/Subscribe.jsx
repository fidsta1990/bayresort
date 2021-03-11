import React, { useState, useEffect } from "react";
import { Form, FormInput, FormBtn } from "./subscribeStyle";

const Subscribe = () => {
  const [error, setError] = useState({ show: false, msg: "" });
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      entry &&
      entry.includes("@") &&
      entry.includes(".") &&
      entry.includes(".com")
    ) {
      setEntries([...entries, entry]);
      setError({ show: true, msg: "All Subscribed" });
      setEntry("");
    } else {
      setError({ show: true, msg: "Sorry, Invalid Email" });
      setEntry("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError({ show: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter Email"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <FormBtn>subscribe</FormBtn>
      </Form>
      {error.show && (
        <h4 className={`message ${entry === false ? "danger" : "success"}`}>
          {error.msg}
        </h4>
      )}
    </>
  );
};

export default Subscribe;
