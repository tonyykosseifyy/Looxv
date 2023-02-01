import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SallaLogo } from '../../../assets/looxv-logo';
import { IconButton, TextField } from '@mui/material';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./styles.module.css";

function Row({ user, handleEdit, handleDelete }) {
  return (
    <div key={user} className={`${styles.grid} ${styles.rows}`}>
      <div><p>{user.id}</p></div>      
      <div><p>{user.name}</p></div>
      <div><p>{user.email}</p></div>
      <div><p>{user.password}</p></div>
      <div className={styles.row_provider}>
        <div className={styles.row_provider_left}>
      		<FcGoogle />
        	<div><p>Google</p></div>
      	</div>
    		<div className={styles.row_provider_right}>
        	<div>
        		<IconButton onClick={() => handleEdit()}>
            	<HiOutlineDotsVertical />
        		</IconButton>
        		<IconButton onClick={() => handleDelete()}>
            	<AiOutlineDelete style={{fontSize: "18px"}} />
        		</IconButton>
    			</div>
    		</div>
    	</div>
    </div>
  );
};

export default Row;