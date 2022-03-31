import classnames from "classnames";
import styles from "./triangle.module.css";

type PropType = {
  type: "up" | "down" | "right" | "left";
};

export const Triangle = ({ type }: PropType) => (
  <div className={classnames(styles.triangle, styles[`triangle--${type}`])} />
);
