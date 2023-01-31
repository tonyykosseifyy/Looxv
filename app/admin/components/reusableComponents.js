import styles from "./styles.module.css";

export const Button = (props) => {
  const { children, title, ...rest } = props ;
  return (
			<button {...rest} className={`${styles.button} ${false && styles.buttonActive}`}>{children}</button>
  );
};

