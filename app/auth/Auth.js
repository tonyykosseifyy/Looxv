'use client'
import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import { CustomButton, CustomLink, CustomizedSnackbars } from '../../components/reusableComponents';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AiFillEye , AiFillEyeInvisible} from "react-icons/ai" ;
import { InputAdornment , IconButton, InputLabel, FormControl, TextField, Checkbox } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { register, signWithEmail } from '../../helpers/api/auth';
import useLocalStorage from '../../helpers/localStorage';
import { useRouter } from 'next/navigation';

const IconsContainer = ({children}) => {
  return (
    <div className={styles.iconContainer}>{children}</div>
  )
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Auth = (props) => {
  const { login } = props ;
  const [ showPassword , setShow ] = useState(false);
  const [ name , setName ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ check , setCheck ] = useState(false);
  const [ alertMessage , setAlertMessage ] = useState("");
  const [ error, setError ] = useState(false);
  const [ open , setOpen ] = useState(false);
  const [ token, updateToken ] = useLocalStorage("token","");
  const router = useRouter();
  const isDisabled = () => {
    return login ? !email || !password || validateEmail(): !check || !name || !email || !password || validateEmail(); 
  }
  const validateEmail = () => {
    let regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    if (!email) return false ;
    return !regex.test(email);
  }
  const handleResponse = (error, message) => {
    setError(error);
    setAlertMessage(message);
    setOpen(true);
  }
  const handleSubmit = async () => {
    console.log("heyy");
    const response = login ? await signWithEmail(email, password):await register(name, email, password);
    const { data, message } = response ;
    if (!data) {
      handleResponse(true, message);
    } else {
      handleResponse(false, message);
      updateToken(data.token);
    }
  }
  
  const handleClose = () => {
    setName("") ;
    setEmail("");
    setPassword("");
    setOpen(false);
  }
  useEffect(() => {
    if (token) {
      router.push("/");
    }
  },[token])
  const signWithProvider = (provider) => {
    router.push(`${process.env.BASE_URL}/api/users/login/${provider}`)
  }
  return (
		<div className={styles.formContainer}>
      <h1>{ login ? "Log in to your account": "Create your account"}</h1>
      <div className={styles.socialButtons}>
        <CustomButton onClick={() => signWithProvider("google")} startIcon={<IconsContainer><FcGoogle /></IconsContainer>}>Sign in with Google</CustomButton>
        <CustomButton onClick={() => signWithProvider("salla")}>Sign in with Salla</CustomButton>
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
        <div className={styles.rememberCheck}>
          <div style={{display: "flex",alignItems: "center"}}>
            <div>
              <Checkbox checked={check} onClick={() => setCheck(!check)} />
            </div>
            <p style={{fontSize:"16px"}}>Remember me</p>
          </div>
          <CustomLink href="/">Forgot password?</CustomLink>
          
        </div>
        :
        <div className={styles.submitContainer} >
          <div>
            <Checkbox checked={check} onClick={() => setCheck(!check)} />
          </div>
          <p style={{fontSize:"15px"}}>I agree to Terms of Service & Privacy Policy</p>
        </div>
        }

        <CustomButton onClick={() => handleSubmit()} disabled={isDisabled()}>{login ? "Log In": "Create Account"}</CustomButton>
        
      </form>

      <div className={styles.formEnd}>
        <p>{ login ? "Don't have an account?" : "Already have an account?"}</p>
        <CustomLink scroll={false} onClick={() => scrollToTop()}  href={login ? "/auth/signup": "/auth/login"}>{login ? "Create one" : "Sign In"}</CustomLink>
      </div>
      <CustomizedSnackbars
        message={alertMessage}
        open={open}
        close={() => handleClose()}
        severity={error ? "error": "success"}
      /> 

    </div>
  )
};


export default Auth ;