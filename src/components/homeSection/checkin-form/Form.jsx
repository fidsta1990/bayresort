import React from "react";
import * as FormS from "./formS";
import { BtnSolid } from "../../buttons/btnStyles";

const Form = ({ open }) => {
  return (
    <FormS.Form>
      <FormS.Group>
        <label htmlFor="check-in">Check In</label>
        <FormS.Date
          type="date"
          name="checkIn"
          id="check-in"
          className="form-control"
        />
      </FormS.Group>
      <FormS.Group>
        <label htmlFor="check-out">Check Out</label>
        <FormS.Date
          type="date"
          name="checkOut"
          id="check-out"
          className="form-control"
        />
      </FormS.Group>
      <FormS.Group>
        <label htmlFor="qty">Guests</label>
        <FormS.Select name="qty" id="qty" className="form-control qty">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="threeplus">3+</option>
        </FormS.Select>
      </FormS.Group>
      <BtnSolid type="button" onClick={open}>
        Book
      </BtnSolid>
    </FormS.Form>
  );
};

export default Form;
