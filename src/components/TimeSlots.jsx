import dayjs from "dayjs";
import React from "react";
import styles from "./timeslots.module.scss";
const times = Array.from(new Array(24));
const TimeSlots = () => {
  return (
    <div className={styles.container}>
      <div>
        {times.map((_, int) => {
          const date = new Date();
          date.setHours(int + 1);
          date.setMinutes(0);
          date.setSeconds(0);
          date.setMilliseconds(0);
          return <button>{dayjs(date.toISOString()).format("HH:mm")}</button>;
        })}
      </div>
    </div>
  );
};
export default TimeSlots;
