import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const price =(JSON.parse(localStorage.getItem("price")));
  console.log(parseInt(price,10));

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{backgroundColor:"rgb(63,81,181)", color:"white", marginLeft:"45%",marginTop:"2%"}}>Check Add Items</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order Summary
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {JSON.parse(localStorage.getItem(("name")))} : {price} <Button variant='contained' sx={{marginLeft:"140px"}}>+</Button> 
            <Button variant='contained' sx={{backgroundColor:"rgb(245,0,87)"}}>-</Button>
          </Typography>

          <Typography id="modal-modal-description" sx={{ ml: 0 }}>
            Total : (INR) {price}
          </Typography>
          <Button  variant='contained' sx={{backgroundColor:"rgb(63,81,181)", color:"white", marginTop:"40px", marginLeft:"110px"}} onClick={()=> navigate("/checkout")}>SAVE AND CheckOut</Button>
          <Button variant='outline' sx={{ color:"rgb(63,81,181)",marginTop:"40px"}} onClick={handleClose}>Cancle</Button>
        </Box>
      </Modal>
    </div>
  );
}
