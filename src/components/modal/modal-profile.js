import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CardProfile from '../Card';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalProfile(props) {
  return (
    <Dialog
      open={ props.open }
      TransitionComponent={ Transition }
      keepMounted
      fullWidth={ '50%' }
      onClose={ props.handleClose }
    >
      <div className='modal-profile'>
        <CardProfile />
        <h2>{ props.name }</h2>
        <button onClick={ props.handleClose }>
          cerrar
        </button>
      </div>
    </Dialog>
  );
}

ModalProfile.defaultProps = {
  'handleClose': null,
  'name': '',
}

export default ModalProfile
