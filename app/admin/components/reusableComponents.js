import styles from "./styles.module.css";
import Link from "next/link";

export const Button = (props) => {
  const { children, router, title, ...rest } = props ;
	let isActive = router.pathname === `/admin/${title}`; 
  return (
		<Link>
			<button {...rest} className={`${styles.button} ${isActive && styles.buttonActive}`}>{children}</button>
		</Link>
  )
};