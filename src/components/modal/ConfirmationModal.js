import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import MUItheme from '../../themes/styled-components/MuiTheme'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 3),
  },
  modalHeading: {
    padding: '0.5rem',
    fontWeight: 'bold'
  },
  modalBody: {
    padding: '1rem'
  },
  modalButtons: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '100%'
  }
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
            <Typography variant="body1" className={classes.modalHeading}>
              APPROVED PT 
            </Typography>
            <hr></hr>
            <div className={classes.modalBody}>
              <p>You are approving 2 Personal Trainers.</p>
              <ButtonGroup className={classes.modalButtons}>
                <Button 
                  size = "small"
                  style = {{
                      marginRight: 12,
                      background: 'black',
                      borderRadius: 5,
                      width: '67px'
                  }}
                  variant = "contained" 
                  color = "secondary"
                  type = "button"> 
                  OK 
                </Button>

                <Button 
                  size = "small"
                  style = {{
                      background: '#985336',
                      borderRadius: 5,
                      width: '67px'
                  }}
                  variant = "contained" 
                  color = "secondary"
                  type = "button"> 
                  CANCEL 
                </Button>

              </ButtonGroup>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
