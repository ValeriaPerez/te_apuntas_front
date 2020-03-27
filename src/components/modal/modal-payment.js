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
      <div className='reservation__box'>
        <h4 className='reservation__title show-desktop'>Reservación</h4>
        <p className='reservation__text show-desktop'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
        <h4 className='reservation__subtitle'>Fechas Disponibles</h4>
        <div className='reservation__options'>
          
          <div className='reservation__option'>
            <div class="reservation__input">
              <input type='radio' id={ 'index' } name={ 'date' } value={ 'index' } class="reservation__radio"/>
              <label for={ 'index' } class="input--radio">
                <span class="radio"></span> Nov 26 - Nov 30, 2019
              </label>
            </div>
            <div class="reservation__input">
              <input type='radio' id={ 'index' } name={ 'date' } value={ 'index' } class="reservation__radio"/>
              <label for={ 'index' } class="input--radio">
                <span class="radio"></span> Nov 26 - Nov 30, 2019
              </label>
            </div>
          </div>
    
        </div>
      </div>
    </Dialog>
  );
}

ModalPayment.defaultProps = {
  'handleClose': null,
  'name': '',
}

export default ModalPayment
