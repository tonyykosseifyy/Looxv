import Button from '@mui/material/Button';
import styles from "./styles.module.css";
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars = (props) => {
  const { message , severity , open, close, ...rest } = props ; 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    close();
  };

  return (
    <Stack {...rest} spacing={2} sx={{ width: '100%' }}>
      <Snackbar TransitionComponent={SlideTransition} sx={{minWidth:"100%"}} anchorOrigin={{ vertical:"bottom", horizontal:"center" }} open={open} autoHideDuration={60000} onClose={handleClose}>
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

export const CustomTypography = (props) => {
  const theme = useTheme();
  const { children, ...rest} = props ;
  return (
    <Typography {...rest} color={theme.palette.text.primary}>{children}</Typography>
  );
};


export const CustomLink = (props) => {
  const { children, ...rest} = props ;
  const theme = useTheme()
  return (
    <Link {...rest} className={styles.customLink}>
      <Typography sx={{fontWeight:"bold"}} color={theme.palette.primary.main}>{children}</Typography>
    </Link>
  )
};
