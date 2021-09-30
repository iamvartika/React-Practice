import React from "react";
import classes from "./Button.module.css";
function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.OnClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
