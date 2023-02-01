import styles from "./styles.module.css";
import Link from "next/link";


export const Button = (props) => {
  const { children, title, router, ...rest } = props ;
  return (
    <Link href={`/admin/${title}`}>
      <button {...rest} className={`${styles.button} ${title ==="users" && styles.buttonActive}`}>{children}</button>
    </Link>
  );
};

export const UserPaper = (props) => {
  return (
    <div>

    </div>
  )
};