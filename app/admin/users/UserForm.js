import React from 'react'
import { FormControl, TextField } from '@mui/material';
import styles from "./styles.module.css";

function UserForm({ user_cred }) {
  return (
    <FormControl sx={{ minWidth:"60vw" }}>
			<div className={styles.user_form}>
				<TextField defaultValue={user_cred.id} id="outlined-basic" label="ID" variant="outlined" />
				<TextField defaultValue={user_cred.name} id="outlined-basic" label="full name" variant="outlined" />
				<TextField defaultValue={user_cred.email} id="outlined-basic" label="email" variant="outlined" />
				<TextField defaultValue={user_cred.password} id="outlined-basic" label="password" variant="outlined" />
			</div>
  
    </FormControl>
  )
};

export default UserForm;