import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Stepper from './Stepper';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalTutorial(props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ModalTA"
        open={ props.open }
        onClose={ props.handleClose }
        closeAfterTransition
        BackdropComponent={ Backdrop }
        BackdropProps={{
          timeout: 2500,
        }}
      >
        <Fade in={ props.open }>
          <div className="ModalTA__body">
            <Stepper handleClose={ props.handleClose }/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

ModalTutorial.defaultProps = {
  'handleClose': null,
  'open': false,
}

export default ModalTutorial
