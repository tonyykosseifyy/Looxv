import Button from '@mui/material/Button';


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


