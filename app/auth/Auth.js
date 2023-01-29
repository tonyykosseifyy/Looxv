'use client'
import React, { useState } from 'react'
import styles from "./styles.module.css";
import { CustomButton } from '../../components/reusableComponents';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AiFillEye , AiFillEyeInvisible} from "react-icons/ai" ;
import { InputAdornment , IconButton, InputLabel, FormControl, TextField, Checkbox } from '@mui/material';

const Auth = (props) => {
  const { login } = props ;
  const [ showPassword , setShow ] = useState(false);
  const [ name , setName ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ check , setCheck ] = useState(false);
  const isDisabled = () => {
    return login ? !email || !password || validateEmail(): !check || !name || !email || !password || validateEmail(); 
  }
  const validateEmail = () => {
    let regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    if (!email) return false ;
    return !regex.test(email);
  }
  return (
		<div className={styles.formContainer}>
      <h1>{ login ? "Log in to your account": "Create your account"}</h1>
      <div className={styles.socialButtons}>
        <CustomButton>Sign in with Google</CustomButton>
        <CustomButton>Sign in with Google</CustomButton>
      </div>

      <div className={styles.barContainer}>
        <div className={styles.bar} />
        <span>or</span>
        <div className={styles.bar} />
      </div>
      
      <form className={styles.formControl}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{display: login && "none"}} type="text" autoComplete='name' label="Full Name" variant="outlined" />
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} error={validateEmail()}  type="email" label="Email" variant="outlined" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {login ? 
        <div style={{display:"flex",alignItems: "center",justifyContent:"space-between"}}>
          <div style={{display: "flex",alignItems: "center"}}>
            <div>
              <Checkbox checked={check} onClick={() => setCheck(!check)} />
            </div>
            <p style={{fontSize:"16px"}}>Remember me</p>
          </div>
          <p>Forgot password?</p>
          
        </div>
        :
        <div className={styles.submitContainer} >
          <div>
            <Checkbox checked={check} onClick={() => setCheck(!check)} />
          </div>
          <p style={{fontSize:"15px"}}>I agree to Terms of Service & Privacy Policy</p>
        </div>
        }

        <CustomButton disabled={isDisabled()}>{login ? "Log In": "Create Accout"}</CustomButton>
        
      </form>
    </div>
  )
};


export default Auth ;