import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import MUItheme from '../../themes/styled-components/MuiTheme'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div theme = {MUItheme}>
     <Button
        size = "large"
        style = {{
            marginTop: 12,
            marginBottom: 12,
            background: 'black'
        }}
        variant = "contained" 
        color = "secondary"
        type="button"
        onClick={handleOpen}> 
        APPROVED CHECKED PTS 
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">APPROVED PT</h2>
            <p id="transition-modal-description">You are approving 2 Personal Trainers.</p>
            <button type = "button"> OK </button>
            <button type = "button"> CANCEL </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
