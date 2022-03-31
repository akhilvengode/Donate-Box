import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  className?: string;
  textAlign?: "left" | "center" | "right";
  varient?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
};

export const Heading = ({
  children,
  className,
  textAlign = "left",
  varient = "h1",
}: PropType) => {
  const Heading = varient;
  return (
    <Heading
      className={classnames(
        styles.heading,
        styles[`heading--${textAlign}`],
        className
      )}
    >
      {children}
    </Heading>
  );
};
