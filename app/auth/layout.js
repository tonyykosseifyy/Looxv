"use client"
import styles from "./styles.module.css";
import { LogoDark } from "../../assets/looxv-logo";
import { LoginIllustration } from "../../assets/looxv-logo";
import { useTheme } from "@mui/material/styles";

const authLayout = ({ children }) => {
  const theme = useTheme();
    return (
      <section className={styles.authWrapper}>
        <div className={styles.illustrationWrapper} style={{backgroundColor: theme.palette.primary}}>
          <LogoDark style={{width: "200px"}} />
          <div>
            <LoginIllustration />
          </div>
        </div>
        
        <div className={styles.formWrapper} style={{backgroundColor: theme.palette.background.default}} >
          {children}
        </div>
        
      </section>
    );
};

export default authLayout ;