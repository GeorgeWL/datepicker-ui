import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./dayspicker.module.scss";
import TimePicker from "./TimePicker";
import TimeSlots from "./TimeSlots";
const DayPickerRow = ({ isDisabled, dayId, isOpen, label, handleChange }) => {
  const [selectValue, setSelectValue] = useState("");
  const { t } = useTranslation();
  return (
    <tr className={classes.row}>
      <td>
        <div className={classNames(classes.day, isDisabled && "disabled")}>
          <label htmlFor={dayId} key={dayId}>
            {t(label)}
          </label>
          <input
            value={isOpen}
            checked={isOpen}
            type="checkbox"
            id={dayId}
            disabled={isDisabled}
            onChange={handleChange}
          />
        </div>
      </td>
      <td>
        {isOpen && <TimePicker onChange={setSelectValue} value={selectValue} />}
      </td>
      <td>{selectValue === "custom" && <TimeSlots />}</td>
    </tr>
  );
};
export default DayPickerRow;
