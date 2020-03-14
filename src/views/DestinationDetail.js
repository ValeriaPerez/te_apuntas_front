import React, { Component } from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import Avatar from '../components/elements/avatar';

export default class DestinationDetail extends Component {


  render() {
    console.log('detination detail', this.props)
    return (
      <div className='destination-detail'>
        <Header
          login={ true }
          title='Volver a Home'
          alt='Logo Header'
          imageLogo={ require('../assets/images/teApuntasB.png') }/>
        <div className='destination-detail__container'>
          <div className='destination-detail__columns'>
            <div className='destination-detail__column'>
              <div className='description'>
                <h4 className='description__title'>HeliSki Canadá <span className='description__span'>7,980 € </span></h4>
                <p className='description__text'>
                  “La experiencia definitiva: sin límites” - El HeliSki es la experiencia definitiva para cualquier esquiador/rider sin ningún lugar a dudas. Todo aquello que has soñado o visto en películas y catálogos, donde los esquiadores disfrutan de interminables bajadas en laderas vírgenes de nieve polvo o entre bosques con tanto “powder” que quedan enterrados en cada giro ¡ES VERDAD!
                </p>
                <p className='description__text'>
                  Te proponemos, de forma muy personalizada, una semana de HeliSki con alojamientos de lujo en mitad de las montañas canadienses, con los helicópteros en la puerta de la habitación y guías privados para cada grupo de 4 esquiadores.
                </p>
                <p className='description__text'>
                  ¡No hay límite de bajadas ni de metros verticales! Y, si algún día tenemos mal tiempo y los helicópteros no pueden volar, las quitanieves que usamos de “BackUp” nos estarán esperando para no perder ni una sola bajada.
                </p>
              </div>
              <div className='location'>
                <h4>Ubicacion</h4>
              </div>
            </div>
            <div className='destination-detail__column'>
              <div className='reservation'>
                <h4>Reservación</h4>
              </div>
              <div className='travelers'>
                <h4>Apuntados al viaje</h4>
                <Avatar showName={ true }/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
