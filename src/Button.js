import React from "react";
import "./Button.scss";

export default function Button({ text, onClick, style }) {
  console.log("style:", style);
  return (
    <button onClick={onClick} style={{ ...style }}>
      {text}
    </button>
  );
}
