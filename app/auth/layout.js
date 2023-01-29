import styles from "./styles.module.css";

const authLayout = ({ children }) => {
    return (
      <section className={styles.wrapper}>
        {/* Include shared UI here e.g. a header or sidebar */}
  
        {children}
      </section>
    );
}

export default authLayout ;