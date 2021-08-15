import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./dayspicker.module.scss";
import TimePicker from "./TimePicker";
import TimeSlots from "./TimeSlots";
const DayPickerRow = ({ isDisabled, dayId, isOpen, label, handleChange }) => {
  const [selectValue, setSelectValue] = useState("");
  const { t } = useTranslation();
  const defaultSlots =
    selectValue === "9to5"
      ? [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      : selectValue === "24hr"
      ? Array.from(new Array(24)).map((_, int) => int)
      : [];
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
      {isOpen ? (
        <>
          <td>
            <TimePicker onChange={setSelectValue} value={selectValue} />
          </td>
          <td colSpan="3">
            <TimeSlots defaultValue={defaultSlots} />
          </td>
        </>
      ) : (
        <td colSpan="2">{t("closed")}</td>
      )}
    </tr>
  );
};
export default DayPickerRow;
