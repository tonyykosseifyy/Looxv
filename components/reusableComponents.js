import Button from '@mui/material/Button';
import styles from "./styles.module.css";
import Link from 'next/link';


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

