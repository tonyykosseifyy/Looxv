import styles from "./styles.module.css";
import Button from '@mui/material/Button';

export const LoginButton = (props) => {
    const { children , ...rest } = props ;
    return (
        <Button 
            variant="contained" 
            sx={{
                fontFamily: "Open Sans, sans-serif",
                margin:"10px 0",
                fontWeight: "bold"
        }}
        >{children}</Button>
    )
};

