import React from "react";
import { useState } from "react";
function Service(props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const { label, onChange, errorMessage, id, ...inputProps } = props;
  return (
    <div className="service">
      <label className="form-label">{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <br />
      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
}

export default Service;
