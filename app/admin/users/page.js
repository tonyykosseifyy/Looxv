import React from 'react'
import styles from "./styles.module.css";

const items = [
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
  ["asdkjasd", "tony kosseify", "tonyasda", "asdasd"],
]

function Users() {
  return (
    <div className={styles.users_wrapper}>
      <div className={`${styles.users_header} ${styles.grid}`}>
        <div><p>#user_id</p></div>
        <div><p>full name</p></div>
        <div><p>email</p></div>
        <div><p>password</p></div>
        <div><p>provider</p></div>
      </div>
      <div className={styles.users_table}>
        {items.map((item) => (
          <div key={item} className={`${styles.grid} ${styles.rows}`}>
            <div><p>{item[0]}</p></div>
            <div><p>{item[1]}</p></div>
            <div><p>email</p></div>
            <div><p>password</p></div>
            <div><p>provider</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users