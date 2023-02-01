"use client"
import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import UserForm from './UserForm';

export default function ResponsiveDialog({ open, setOpen, deleting, user }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Dialog
        maxWidth='lg'
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-dialog"
      >
        <DialogTitle id="edit-dialog">
          {`${deleting ? "Delete" : "Edit"} User . ${user.name}`}
        </DialogTitle>
        <DialogContent>
            {deleting ? 
            <DialogContentText>Are you sure on deleting {user.name}?</DialogContentText>
            :
            <UserForm user_cred={user} />
            }
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          { deleting ? 
          <Button sx={{backrgoundColor: "red"}} variant={'contained'} onClick={handleClose} autoFocus>
            Delete
            </Button>:
        <Button variant={'contained'} onClick={handleClose} autoFocus>
            Save
        </Button>
        }
          
        </DialogActions>
      </Dialog>
    </div>
  );
};