import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success";
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<PropType> = ({
  label,
  onChange,
  checked,
  color = "primary",
  size = "small",
}) => {
  return (
    <label className={styles.checkbox}>
      <span
        tabIndex={0}
        className={classnames(
          styles.checkbox__box,
          styles[`checkbox__box--${size}`],
          checked && styles["checkbox__box--active"],
          checked && styles[`checkbox__box--${color}`]
        )}
      />
      <input
        tabIndex={-1}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
};

export default Checkbox;
