"use client"
import React from 'react'
import styles from "./sidebar.module.css";
import Image from 'next/image';
import { Button } from './reusableComponents';
import { FiSettings } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";

const SideBar = (props) => {
  const { router } = props ;
  return (
    <section className={styles.sidebar_wrapper}>
      <div className={styles.sidebar_logo}>
        <Image src="/logo.png" width={130} height={74} alt="lxoov-editor" style={{objectFit:"contain"}}/>
      </div>
      <p>Dashboard</p>
      <Button router={router} title="settings">
        <FiSettings />
        <p>Settings</p>
      </Button>
      <Button router={router} title="users">
        <TbUsers />
        <p>Users</p>
      </Button>
    </section>
  )
}

export default SideBar