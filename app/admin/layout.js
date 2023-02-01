"use client"
import styles from "./styles.module.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  return (
      <main className={styles.admin_wrapper}>
        <SideBar /> 
        <section className={styles.admin_details}>
          <Navbar />
          {children}
          
        </section>
      </main>
    );
};

export default AdminLayout ;