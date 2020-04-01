import React, { Component } from 'react';
import SharedButtons from '../elements/shared';
import Travelers from './travelers';
import { getFechasDisponibles } from '../../utilities/utils';

class Reservation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
      step: 'step',
      response: true,
    }
    this.handleClickOptionPAyment = this.handleClickOptionPayment.bind(this);
    this.handleClicksection = this.handleClicksection.bind(this);
  }

  render() {
    return (
      <div className='reservation'>
        <div className='reservation__container'>
          { this.renderStep(this.state.step) }
        </div>
      </div>
    );
  }

  renderStep(step) {
    switch (step) {
      default:
        return this.renderSelectPaymentMethod();

      case 'step':
        return this.renderSelectPaymentMethod();

      case 'step-2':
        return this.rederPaymentDetail();

      case 'step-3':
        return this.renderInfoDetailPayment();

      case 'step-payment':
        return this.renderPaymentResponse();
    }
  }

  renderSelectPaymentMethod() {
    const { optionSelected } = this.state;
    const { destiny } = this.props;
    return (
      <div>
        <div className='reservation__box'>
          <h4 className='reservation__title show-desktop'>Reservación</h4>
          <p className='reservation__text show-desktop'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
          <h4 className='reservation__subtitle'>Fechas Disponibles</h4>
          <div className='reservation__options'>
            { this.renderOptionsPayment() }
          </div>
          <SharedButtons onClick={ () => this.handleClicksection('step-2') }/>
        </div>
        <Travelers optionSelected={optionSelected} maxUsers={destiny.max_pasajeros} />
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
            <input onClick={ () => this.handleClickOptionPayment(index) } type='radio' id={ index } name={ date } value={ index } class="reservation__radio"/>
            <label htmlFor={ index } class="input--radio">
              <span class="radio"></span> { date }
            </label>
          </div>
        </div>
      );
    });
  }

  rederPaymentDetail() {
    return (
      <div className='reservation-resume'>
        <div className='reservation__box'>
          <h4 className='reservation-resume__title show-desktop'>Reservación</h4>
          <div className='reservation-resume__icon'></div>
          <p className='reservation-resume__title-total'>Total a Pagar</p>
          <h4 className='reservation-resume__price'>€50.00</h4>
          <div className='reservation-resume__resume'>
            <div className='reservation-resume__item'>
              <span>Lorem Ipsum</span><strong>€46.00</strong>
            </div>
            <div className='reservation-resume__item'>
              <span>Lorem Ipsum</span><strong>€46.00</strong>
            </div>
          </div>
          <div className='reservation-resume__total'>
            <span>total</span><strong>$50.00</strong>
          </div>
        </div>
        <button onClick={ () => this.handleClicksection('step-3') } className='button-shared button-shared--black'>Continuar</button>
      </div>
    );
  }

  renderInfoDetailPayment() {
    const address = '497 Evergreen Rd. Roseville 497 Evergreen Rd. Roseville 497 Evergreen Rd. Rosevill';
    return (
      <div className='reservation-info-detail'>
        <div className='reservation-info-detail__box'>
          <h4 className='reservation-info-detail__title'>Reservación</h4>
          <div className='reservation-info-detail__select'>
            <h4>VISA</h4>
          </div>
          <div className='reservation-info-detail__table'>
            <div className='reservation-info-detail__item'>
              <strong>John Doe</strong><span>CARDHOLDER NAME</span>
            </div>
            <div className='reservation-info-detail__item'>
              <strong>1234 - 5678 - 3459 - 2456</strong><span>CARD NUMBER</span>
            </div>
            <div className='reservation-info-detail__item'>
              <strong>05   /   21</strong><span>EXPIRE DATE</span>
            </div>
            <div className='reservation-info-detail__item'>
              <strong>123</strong><span>€46.00</span>
            </div>
            <div className='reservation-info-detail__item'>
              <strong>{ address.substring(1, 10) }</strong><span>ADDRESS</span>
            </div>
          </div>
        </div>
        <button onClick={ () => this.handleClicksection('step-payment') } className='button-shared button-shared--black'>Pagar</button>
      </div>
    );
  }

  renderPaymentResponse() {
    const { response } = this.state;
    const data = response ? { 'icon': '', 'title': '¡Pago exitoso!', 'description': 'Empieza la cuenta atrás para la gran escapada', 'button': 'Volver al inicio'} : { 'icon': '', 'title': '¡Pago rechazado!', 'description': 'Parece que ha ocurrido un error, inténtalo de nuevo', 'button': 'Reintentar'}
    return (
      <div>
        <div className=''>
          <h4 className='reservation__title'>Reservación</h4>
          <div className='reservation__response'>
            <h3 className='reservation__response__title'>{ data.title }</h3>
            <p className='reservation__response__text'>{ data.description }</p>
          </div>
          <button onClick={ response ? () => this.setState({ response: false, step: 'step' }) : () => this.handleClicksection('step') } className='button-shared button-shared--black'>{ data.button }</button>
        </div>
      </div>
    );
  }

  handleClickOptionPayment(index) {
    const { destiny } = this.props;
    this.setState({
      optionSelected: destiny.fechasdisponibles_set[index],
    });
  }

  handleClicksection(step) {
    const newStep = step;
    this.setState({
      step: newStep,
    });
  }

}

export default Reservation;
