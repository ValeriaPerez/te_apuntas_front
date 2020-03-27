import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CardProfile from '../Card';

import Reservation from '../destination-detail/reservation';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalPayment(props) {
  return (
    <Dialog
      open={ props.open }
      TransitionComponent={ Transition }
      keepMounted
      fullWidth={ '50%' }
      onClose={ props.handleClose }
    >
      <Reservation destiny={destiny}/>
    </Dialog>
  );
}

ModalPayment.defaultProps = {
  'handleClose': null,
  'name': '',
}

export default ModalPayment
