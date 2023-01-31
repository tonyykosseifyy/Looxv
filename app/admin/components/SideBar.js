"use client"
import React from 'react'
import styles from "./sidebar.module.css";
import Image from 'next/image';
import { Button } from '@mui/material';

const SideBar = () => {
  return (
    <section className={styles.sidebar_wrapper}>
      <div className={styles.sidebar_logo}>
        <Image src="/logo.png" width={130} height={74} alt="lxoov-editor" style={{objectFit:"contain"}}/>
      </div>
      <p>Dashboard</p>
      <Button className={styles.MuiButtonBase-root}>Settings</Button>
      <Button >Users</Button>
    </section>
  )
}

export default SideBar