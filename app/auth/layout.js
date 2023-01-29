import styles from "./styles.module.css";
import { LogoDark } from "../../assets/looxv-logo";
import Image from "next/image";

const authLayout = ({ children }) => {
    return (
      <section className={styles.authWrapper}>
        <div className={styles.illustrationWrapper}>
          <LogoDark style={{width: "200px"}} />
          {/* <Image src={"/login2.png"} width={100} height={100} alt="asdas"/> */}
        </div>
        
        <div className={styles.formWrapper}>
          {children}
        </div>
        
      </section>
    );
};

export default authLayout ;