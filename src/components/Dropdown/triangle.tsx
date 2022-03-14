import classnames from "classnames";
import styles from "./triangle.module.css";

type PropType = {
  type: "up" | "down" | "right" | "left";
};

const Triangle: React.FC<PropType> = ({ type }) => {
  return (
    <div className={classnames(styles.triangle, styles[`triangle--${type}`])} />
  );
};

export default Triangle;
