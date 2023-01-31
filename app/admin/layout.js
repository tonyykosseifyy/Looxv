import styles from "./styles.module.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";


const adminLayout = ({ children }) => {

  return (
      <main className={styles.admin_wrapper}>
        <SideBar/> 
        <section className={styles.admin_details}>
          <Navbar />
          {children}
        </section>
      </main>
    );
};

export default adminLayout ;