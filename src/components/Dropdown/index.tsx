import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import Triangle from "./triangle";
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
  value?: OptionType;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
};

const Dropdown: React.FC<PropType> = ({
  label,
  options,
  onChange,
  value,
  placeHolder,
  required = false,
  error = false,
  errorMessage,
}) => {
  const [isOpen, toggle] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const dropdownHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleOptions = () => {
      toggle(false);
      document.removeEventListener("click", toggleOptions);
    };

    if (isOpen) {
      document.addEventListener("click", toggleOptions);
    }
  }, [isOpen]);

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
          id="dropdown-head"
          className={classnames(
            styles.dropdown__head,
            error && styles.dropdown__error
          )}
          ref={dropdownHeadRef}
          tabIndex={0}
          role="button"
          aria-expanded={isOpen}
          onClick={() => toggle((prev) => !prev)}
          onKeyDown={(event) => {
            if (event.key === "Enter") toggle((prev) => !prev);
          }}
        >
          {(value && value.value) || (
              <p className={styles.dropdown__placeholder}>{placeHolder}</p>
            ) ||
            ""}
          <Triangle type={isOpen ? "up" : "down"} />
        </div>
        {error && (
          <p className={styles["dropdown__error-message"]}>{errorMessage}</p>
        )}
      </label>
      {isOpen && (
        <div
          id="dropdown-list"
          ref={optionsRef}
          tabIndex={0}
          role="button"
          className={styles.dropdown__options}
        >
          {options.map(({ name, value: optionValue }) => (
            <div
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

export default Dropdown;
