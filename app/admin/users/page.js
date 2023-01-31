import React from 'react'
import UsersTable from "../components/Users";
import styles from "./styles.module.css";

function Users() {
  return (
    <div className={styles.users_wrapper}>
      <UsersTable />
    </div>
  )
}

export default Users