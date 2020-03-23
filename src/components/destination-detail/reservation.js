import React, { Component } from 'react';
import SharedButtons from '../elements/shared';

class Reservation extends Component {
  render() {
    return (
      <div className='reservation'>
        <div className='reservation__container'>
          <h4 className='reservation__title show-desktop'>Reservación</h4>
          <p className='reservation__text show-desktop'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          <h4 className='reservation__subtitle'>Fechas Disponibles</h4>
          <div className='reservation__options'>
            { this.renderOptionsPayment() }
          </div>
          <SharedButtons />
        </div>
      </div>
    );
  }

  renderOptionsPayment() {
    const options = [
      'Nov 26 - Nov 30, 2019',
      'Dic 27 - Ene 2, 2020',
      'Ene 30 - Feb 5, 2020',
    ];

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
