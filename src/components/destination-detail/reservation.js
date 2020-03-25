import React, { Component } from 'react';
import SharedButtons from '../elements/shared';
import Travelers from './travelers';
import { getFechasDisponibles } from '../../utilities/utils';

class Reservation extends Component {
  render() {
    return (
      <div className='reservation'>
        <div className='reservation__container'>
          <h4 className='reservation__title show-desktop'>Reservación</h4>
          { this.renderPaymentMethod() }
        </div>
      </div>
    );
  }

  renderPaymentMethod() {
    return (
      <div>
        <p className='reservation__text show-desktop'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
        <h4 className='reservation__subtitle'>Fechas Disponibles</h4>
        <div className='reservation__options'>
          { this.renderOptionsPayment() }
        </div>
        <Travelers />
        <SharedButtons />
      </div>
    );
  }

  renderOptionsPayment() {
    const { destiny } = this.props;
    const options = getFechasDisponibles(destiny);
    return options.map((date, index) => {
      return (
        <div className='reservation__option' key={ index }>
          <div class="reservation__input">
            <input type='radio' id={ index } name={ date } value={ index } class="reservation__radio"/>
            <label for={ index } class="input--radio">
              <span class="radio"></span> { date }
            </label>
          </div>
        </div>
      );
    });
  }
}

export default Reservation;
