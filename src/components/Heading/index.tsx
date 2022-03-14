import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  className?: string;
  textAlign?: "left" | "center" | "right";
  varient?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<PropType> = ({
  children,
  className,
  textAlign = "left",
  varient = "h1",
}) => {
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

export default Heading;
