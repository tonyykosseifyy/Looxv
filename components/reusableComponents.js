import Button from '@mui/material/Button';
import styles from "./styles.module.css";
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const CustomizedSnackbars = (props) => {
  const { message , severity , open, setOpen, ...rest } = props ; 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack {...rest} spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};



export const CustomButton = (props) => {
    const { children , ...rest } = props ;
    return (
      <Button 
				{...rest}
        variant="contained" 
          sx={{
            margin:"10px 0",
						fontWeight: "500",
						textTransform: "none"
        	}}
        >
					{children}
			</Button>
    );
};
export const CustomLink = (props) => {
  const { children, ...rest} = props ;
  return (
    <Link {...rest} className={styles.customLink}>{children}</Link>
  )
}

