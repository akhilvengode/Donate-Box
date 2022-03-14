import styles from "./index.module.css";

const PageLayout: React.FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default PageLayout;
