import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { Triangle } from "./triangle";
import styles from "./index.module.css";

type OptionType = {
  name: string;
  value: string;
};

type PropType = {
  label: string;
  placeHolder?: string;
  options: Array<OptionType>;
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
  value?: OptionType;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
};

export const Dropdown = ({
  label,
  options,
  onChange,
  onBlur,
  value,
  placeHolder,
  required = false,
  error = false,
  errorMessage,
}: PropType) => {
  const [open, setOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const dropdownHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleOptions = () => {
      setOpen(false);
    };

    if (open) {
      document.addEventListener("click", toggleOptions);
    }

    return () => {
      document.removeEventListener("click", toggleOptions);
    };
  }, [open]);

  return (
    <div className={styles.dropdown}>
      <label>
        <span
          onClick={() => {
            dropdownHeadRef.current?.focus();
          }}
          className={styles.dropdown__label}
        >
          {label}
          {required && <span className={styles.dropdown__required}>*</span>}
        </span>
        <div
          data-testid="dropdown-head"
          className={classnames(
            styles.dropdown__head,
            error && styles.dropdown__error
          )}
          onBlur={onBlur}
          ref={dropdownHeadRef}
          tabIndex={0}
          role="button"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={(event) => {
            event.key === "Enter" && setOpen((prev) => !prev);
          }}
        >
          {(value && value.value) || (
              <p className={styles.dropdown__placeholder}>{placeHolder}</p>
            ) ||
            ""}
          <Triangle type={open ? "up" : "down"} />
        </div>
        {error && (
          <small className={styles["dropdown__error-message"]}>
            {errorMessage}
          </small>
        )}
      </label>
      {open && (
        <div
          data-testid="dropdown-list"
          ref={optionsRef}
          tabIndex={0}
          role="button"
          className={styles.dropdown__options}
        >
          {options.map(({ name, value: optionValue }) => (
            <div
              data-testid="dropdown-option"
              className={classnames(
                styles.dropdown__option,
                optionValue === value?.value &&
                  styles["dropdown__option--active"]
              )}
              key={optionValue}
              role="button"
              onClick={() => onChange(name, optionValue)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
