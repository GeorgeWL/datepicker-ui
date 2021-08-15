import React, { useState } from "react";
import { handleToggleArrayItem } from "../controllers/inputHandler";
import DayPickerRow from "./DayPickerRow";
import * as classes from "./dayspicker.module.scss";
const DAYS_ARRAY = [
  {
    label: "monday",
    id: "monday"
  },
  {
    label: "tuesday",
    id: "tuesday"
  },
  {
    label: "wednesday",
    id: "wednesday"
  },
  {
    label: "thursday",
    id: "thursday"
  },
  {
    label: "friday",
    id: "friday"
  },
  {
    label: "saturday",
    id: "saturday"
  },
  {
    label: "sunday",
    id: "sunday"
  }
];

const DaysPicker = ({ disabledDays = [] }) => {
  const [activeDays, setActiveDays] = useState([]);

  function handleChange(evt) {
    const { id } = evt.target;
    const newDays = handleToggleArrayItem(id, activeDays);
    setActiveDays(newDays);
  }

  return (
    <table className={classes.container}>
      <tbody>
        {DAYS_ARRAY.map((val, idx) => {
          const { id, label } = val;
          const isDisabled = disabledDays.includes(id);
          const dayId = `day-${idx}`;
          const isOpen = activeDays.includes(dayId);
          return (
            <DayPickerRow
              key={idx}
              handleChange={handleChange}
              isDisabled={isDisabled}
              dayId={dayId}
              isOpen={isOpen}
              label={label}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default DaysPicker;
