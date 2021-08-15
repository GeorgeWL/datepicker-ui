import React from "react";
import styles from "./timepicker.module.scss";
const TimePicker = ({ onChange, currentValue }) => {
  function handleChange(evt) {
    const { value } = evt.target;
    onChange(value);
  }
  return (
    <>
      <select
        className={styles.selector}
        onChange={handleChange}
        value={currentValue}
      >
        <option value="" disabled>
          Please Select
        </option>
        <option value="24hr">24 Hours</option>
        <option value="9to5">9:00 AM to 5:00 PM</option>
        <option value="custom">Custom</option>
      </select>
    </>
  );
};
export default TimePicker;
