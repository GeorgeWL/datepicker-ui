import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styles from "./timeslots.module.scss";
const times = Array.from(new Array(24));
const TimeSlots = ({ defaultValue }) => {
  const [activeSlots, setActiveSlots] = useState([]);
  useEffect(() => {
    setActiveSlots(defaultValue);
  }, [defaultValue]);
  return (
    <div className={styles.container}>
      <div>
        {times.map((_, int) => {
          const date = new Date();
          date.setHours(int);
          date.setMinutes(0);
          date.setSeconds(0);
          date.setMilliseconds(0);
          const formattedHour = dayjs(date.toISOString()).format("HH:mm");
          return (
            <button
              style={{
                background: activeSlots.includes(int) ? "green" : "white"
              }}
              key={"hour-" + int}
            >
              {formattedHour}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default TimeSlots;
