import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./dayspicker.module.scss";
import TimePicker from "./TimePicker";
import TimeSlots from "./TimeSlots";
const DayPickerRow = ({ isDisabled, dayId, isOpen, label, handleChange }) => {
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
      <td colSpan="2">{isOpen ? <TimeSlots /> : t("closed")}</td>
    </tr>
  );
};
export default DayPickerRow;
