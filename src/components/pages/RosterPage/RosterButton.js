import React from "react";
import "./RosterButton.css";

const STYLES = ["roster--btn--primary", "roster--btn--outline"];
const SIZES = [
  "roster--btn--medium",
  "roster--btn--large",
  "roster--btn--mobile",
  "roster--btn--wide",
];
const COLOR = ["primary", "blue", "red", "green"];

export const rosterButton = ({
  children,
  type,
  onClick,
  rosterButtonStyle,
  rosterButtonSize,
  rosterButtonColor,
}) => {
  const checkRosterButtonStyle = STYLES.includes(rosterButtonStyle)
    ? rosterButtonStyle
    : STYLES[0];

  const checkRosterButtonSize = SIZES.includes(rosterButtonSize)
    ? rosterButtonSize
    : SIZES[0];

  const checkRosterButtonColor = COLOR.includes(rosterButtonColor)
    ? rosterButtonColor
    : null;

  return (
    <rosterButton
      className={`btn ${checkRosterButtonStyle} ${checkRosterButtonSize} ${checkRosterButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </rosterButton>
  );
};
