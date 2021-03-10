import React from "react";
import * as FormS from "./formS";

const Form = () => {
  return (
    <FormS.Form>
      <div className="form-group">
        <input
          type="date"
          name="checkIn"
          id="check-in"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="checkIn"
          id="check-in"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <select name="qty" id="qty" className="form-control">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="threeplus">3+</option>
        </select>
      </div>
    </FormS.Form>
  );
};

export default Form;


