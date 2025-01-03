import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useMutation } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import $axios from '@/lib/axios/axios.instance';

const DeleteProductDialogue = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Delete Product API

  const { isPending, mutate } = useMutation({
    mutationKey: ['delete-product'],
    mutationFn: async () => {
      return await $axios.delete(`/product/delete/${props.productId}`);
    },
    onSuccess: () => {
      console.log('Deleted...');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        color="error"
        variant="contained"
        startIcon={<DeleteOutlineOutlinedIcon />}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Do you want to delete this product?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once the product is deleted, this action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="success">
            No
          </Button>
          <Button
            onClick={() => {
              mutate();
              handleClose();
            }}
            autoFocus
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default DeleteProductDialogue;
