import React from "react";
import { useState } from "react";
function Service(props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const { label, onChange, errorMessage, id, ...inputProps } = props;
  return (
    <>   
    <div className="service form-floating mb-3">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className="form-control"
        id="floatingInput"
      />
      <label htmlFor="floatingInput">{label}</label>
      <span className="errorMessage">{errorMessage}</span>
    </div>
    </>
  );
}

export default Service;
