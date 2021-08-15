import React from "react";
import { useTranslation } from "react-i18next";
import DaysPicker from "./components/DaysPicker";
import "./styles.css";
function handleSendDays(days) {
  console.log({ days });
}
export default function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <div>
        <button
          onClick={() => i18n.changeLanguage("de-DE")}
          disabled={i18n.language.includes("de")}
        >
          de-DE
        </button>
        <button
          onClick={() => i18n.changeLanguage("en-GB")}
          disabled={i18n.language.includes("en")}
        >
          en-GB
        </button>
      </div>
      <div style={{ flexDirection: "column", maxWidth: "90vw" }}>
        {/* <TextArea /> */}
        <h2>Select Opening Days</h2>
        <DaysPicker onChange={handleSendDays} />
      </div>
    </div>
  );
}
