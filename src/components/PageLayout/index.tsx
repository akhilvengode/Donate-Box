import { ReactNode } from "react";
import styles from "./index.module.css";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};
