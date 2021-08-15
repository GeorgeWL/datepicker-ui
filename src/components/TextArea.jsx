// import PropTypes from 'prop-types';
import classNames from "classnames";
import React, { useState } from "react";
import * as classes from "./textarea.module.scss";
const TextArea = ({
  columns = 4,
  rows = 6,
  divider = "/",
  maxChars = 500,
  maxCharsLabel = "characters"
}) => {
  const [text, setText] = useState("");

  function handleInput(evt) {
    const { value } = evt.target;
    setText(value);
  }

  return (
    <div className={classes.container}>
      <textarea
        value={text}
        onChange={handleInput}
        columns={columns}
        rows={rows}
        className={classes.textarea}
      />
      {maxChars > 0 && (
        <div>
          <span
            className={classNames({
              [classes.error]: text.length > maxChars
            })}
          >
            {text.length}
          </span>{" "}
          {divider} {maxChars} {maxCharsLabel}
        </div>
      )}
    </div>
  );
};

export default TextArea;
