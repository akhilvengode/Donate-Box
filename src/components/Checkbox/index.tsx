import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "error";
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({
  label,
  onChange,
  checked,
  color = "primary",
  size = "small",
}: PropType) => {
  const activeStyle = checked
    ? [styles["checkbox__box--active"], styles[`checkbox__box--${color}`]]
    : [];

  return (
    <label className={styles.checkbox}>
      <span
        tabIndex={0}
        className={classnames(
          styles.checkbox__box,
          styles[`checkbox__box--${size}`],
          ...activeStyle
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
