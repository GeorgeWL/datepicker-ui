import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./timepicker.module.scss";
const TimePicker = ({ onChange, currentValue }) => {
  function handleChange(evt) {
    const { value } = evt.target;
    onChange(value);
  }
  const { t } = useTranslation();
  return (
    <select
      className={styles.selector}
      onChange={handleChange}
      value={currentValue}
      defaultValue="custom"
    >
      <option value="24hr">{t("24hr")}</option>
      <option value="9to5">{t("9to5")}</option>
      <option value="custom">{t("custom")}</option>
    </select>
  );
};
export default TimePicker;
