'use client'
import React, { useState } from 'react'
import styles from "../styles.module.css";
import { LoginButton } from '../../../components/reusableComponents';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AiFillEye , AiFillEyeInvisible} from "react-icons/ai" ;
import { InputAdornment , IconButton, InputLabel, FormControl, TextField, Button } from '@mui/material';

function SignUp() {
  const [ showPassword , setShow ] = useState(false);
  const [ email , setEmail ] = useState("");
  const validateEmail = () => {
    let regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    if (!email) return false ;
    return !regex.test(email);
  }
  return (
    <div className={styles.formDetails}>
      <h1>Create your account</h1>
      <div className={styles.socialButtons}>
        <LoginButton variant="outlined">Sign in with Google</LoginButton>
        <LoginButton variant="outlined">Sign in with Google</LoginButton>
      </div>

      <div className={styles.barContainer}>
        <div className={styles.bar} />
        <span>or</span>
        <div className={styles.bar} />
      </div>
      
      <form className={styles.formControl}>
        <TextField  type="text" autoComplete='name' label="Full Name" variant="outlined" />
        <TextField onChange={(e) => setEmail(e.target.value)} error={validateEmail()}  type="email" label="Email" variant="outlined" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShow(!showPassword)}
                  onMouseDown={() => setShow(false)}
                  edge="end"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </form>


    </div>
  )
};

export default SignUp;

/*
import TextField from '@mui/material/TextField';
<TextField required error={}  label="Outlined" variant="outlined" />

<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

<OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

 */