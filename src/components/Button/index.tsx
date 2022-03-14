import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<PropType & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.button,
        disabled && styles["button--disabled"]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
