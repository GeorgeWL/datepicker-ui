import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import React, { useState } from "react";
import { handleToggleArrayItem } from "../controllers/inputHandler";
import TimePicker from "./TimePicker";
import styles from "./timeslots.module.scss";
dayjs.extend(isBetween);

const getSlotTimes = (interval) => {
  const startTime = createSimpleDate(0);
  const endTime = createSimpleDate(24);
  const result = [dayjs(startTime).format("HH:mm")];
  let time = dayjs(startTime.toString()).add(interval, "m");
  while (dayjs(time).isBetween(startTime, endTime)) {
    result.push(time.format("HH:mm"));
    time = time.add(interval, "m");
  }
  return result;
};

const createSimpleDate = (hours, minutes = 0) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

const TimeSlots = () => {
  const [activeSlots, setActiveSlots] = useState([]);
  const [slotLength, setSlotLength] = useState(60);
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (evt) => {
    const { id } = evt.target;
    const newSlots = handleToggleArrayItem(parseInt(id, 10), activeSlots);
    setActiveSlots(newSlots);
  };
  const slotTimes = getSlotTimes(slotLength);
  return (
    <div className={styles.container}>
      <TimePicker onChange={setSelectValue} value={selectValue} />
      <input
        type="number"
        min="0"
        max="60"
        value={slotLength}
        onChange={({ target: { value } }) => setSlotLength(value)}
      />
      <div>
        {slotTimes.map((value, int) => {
          return (
            <button
              style={{
                background: activeSlots.includes(int) ? "lightgreen" : "white"
              }}
              id={int}
              key={"hour-" + int}
              onClick={handleChange}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default TimeSlots;
