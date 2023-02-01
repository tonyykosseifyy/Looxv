"use client"
import {useState} from 'react'
import styles from "./styles.module.css";
import { FcGoogle } from "react-icons/fc";
import { SallaLogo } from '../../../assets/looxv-logo';
import { IconButton, TextField } from '@mui/material';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

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
  const [edit, setEdit] = useState();
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
            <div className={styles.row_provider}>
              <div className={styles.row_provider_left}>
                <FcGoogle />
                <div><p>Google</p></div>
              </div>
              <div className={styles.row_provider_right}>
                <div>
                  <IconButton>
                    <HiOutlineDotsVertical />
                  </IconButton>
                  <IconButton>
                    <AiOutlineDelete style={{fontSize: "18px"}} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users