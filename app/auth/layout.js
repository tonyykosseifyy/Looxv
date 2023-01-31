"use client"
import styles from "./styles.module.css";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const authLayout = ({ children }) => {
  const theme = useTheme();
  console.log(theme);
    return (
      <section className={styles.authWrapper} >
        <div className={styles.illustrationWrapper} style={{backgroundColor: theme.palette.primary.main}}>
          <Image src="/logo.png" width={300} height={170} alt="lxoov-editor" style={{objectFit:"contain"}} />
          <div>
            <Image src="/illustration.png" width={865} height={682} alt="lxoov-editor" style={{objectFit:"contain"}} />
          </div>
        </div>
        
        <div className={styles.formWrapper} style={{backgroundColor: theme.palette.background.default}} >
          {children}
        </div>
        
      </section>
    );
};

export default authLayout ;