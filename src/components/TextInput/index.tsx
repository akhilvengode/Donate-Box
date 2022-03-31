import classnames from "classnames";
import styles from "./index.module.css";

export type PropType = {
  type?: "text" | "password" | "number" | "email";
  error?: boolean;
  label?: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  id,
  label,
  required,
  error = false,
  errorMessage,
  type = "text",
  ...props
}: PropType & React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className={classnames(styles.input, error && styles["input--error"])}>
      <label className={styles.input__label} htmlFor={id}>
        {label}
        {required && <span className={styles.input__required}>*</span>}
      </label>
      <input type={type} id={id} {...props} />
      {error && <p>{errorMessage}</p>}
    </div>
  );
};
