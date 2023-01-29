import styles from "./styles.module.css";
import { LogoDark } from "../../assets/looxv-logo";


const authLayout = ({ children }) => {
    return (
      <section className={styles.wrapper}>
        <div className={styles.svgWrapper}>
          <LogoDark style={{width: "200px"}} />
        </div>
        
        <div className={styles.formWrapper}>
          {children}
        </div>
        
      </section>
    );
}

export default authLayout ;