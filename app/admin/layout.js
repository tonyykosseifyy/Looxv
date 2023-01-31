import styles from "./styles.module.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";


const adminLayout = ({ children }) => {

  return (
      <main className={styles.admin_wrapper}>
        <SideBar/> 
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