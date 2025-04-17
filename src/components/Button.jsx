// components/Button.jsx
import React from "react";

const Button = ({
  text,
  onClick,
  variant = "filled", // 'filled' or 'outline'
  bgColor = "#1D4ED8", // default blue
  textColor = "#FFFFFF",
  hoverBgColor = "#1E40AF",
  borderColor = "#e73535",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2.5 text-md font-semibold uppercase rounded-lg shadow-md cursor-pointer transition duration-200 ease-in-out";

  const styles = {
    filled: {
      style: {
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
      },
      hoverStyle: {
        backgroundColor: hoverBgColor,
      },
    },
    outline: {
      style: {
        backgroundColor: "transparent",
        color: textColor,
        border: `2px solid ${borderColor}`,
      },
      hoverStyle: {
        backgroundColor: hoverBgColor,
        color: "#FFFFFF",
      },
    },
  };

  const current = styles[variant];

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, current.hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, current.style);
  };

  return (
    <button
      onClick={onClick}
      style={current.style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
