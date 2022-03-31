import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  type = "button",
  disabled = false,
  ...props
}: PropType & React.HTMLProps<HTMLButtonElement>) => {
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
