"use client"
import styles from "./styles.module.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";


const adminLayout = ({ children }) => {
  const router = useRouter();
    return (
      <main className={styles.admin_wrapper}>
        <SideBar router={router} />
        <section className={styles.admin_details}>
          <Navbar />
          <div className={styles.formWrapper}>
            {children}
          </div>
        </section>
      </main>
    );
};

export default adminLayout ;