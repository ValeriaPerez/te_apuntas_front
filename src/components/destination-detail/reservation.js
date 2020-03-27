import React, { Component } from 'react';
import SharedButtons from '../elements/shared';
import Travelers from './travelers';
import { getFechasDisponibles } from '../../utilities/utils';

class Reservation extends Component {
  render() {
    return (
      <div className='reservation'>
        <div className='reservation__container'>
          { this.renderSelectPaymentMethod() }
        </div>
      </div>
    );
  }

  renderSelectPaymentMethod() {
    return (
      <div>
        <div className='reservation__box'>
          <h4 className='reservation__title show-desktop'>Reservación</h4>
          <p className='reservation__text show-desktop'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          <h4 className='reservation__subtitle'>Fechas Disponibles</h4>
          <div className='reservation__options'>
            { this.renderOptionsPayment() }
          </div>
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

  rederPaymentDetail() {
    return (
      <div>
        <div className='reservation__box'>
          <h4 className='reservation__title show-desktop'>Reservación</h4>
          <div className='reservation__icon'></div>
          <p className='reservation__title-total'>Total a Pagar</p>
          <h4 className='reservation__price'>€50.00</h4>
          <div className='reservation__resume'>
            <div className='reservation__item'>
              <span>Lorem Ipsum</span><strong>€46.00</strong>
            </div>
            <div className='reservation__item'>
              <span>Lorem Ipsum</span><strong>€46.00</strong>
            </div>
          </div>
          <div className='reservation__total'>
            <span>total</span><strong>$50.00</strong>
          </div>
        </div>
      </div>
    );
  }

}

export default Reservation;
