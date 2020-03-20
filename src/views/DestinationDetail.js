import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import Avatar from '../components/elements/avatar';

import { retrieveDestinyInfo } from '../redux/actions/destination';

const mapStateToProps = state => ({
  /* --- Home states --- */
  destinyInfo : state.Destination.destinyInfo,
  loadingDestinyInfo : state.Destination.loadingDestinyInfo,
});

class DestinationDetail extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(retrieveDestinyInfo());
  }

  render() {
    const { destinyInfo } = this.props
    console.log('destinyInfo', destinyInfo );
    return (
      <div className='destination-detail'>
        <Header
          login={ true }
          tokenId='1'
          title='Volver a Home'
          alt='Logo Header'
          imageLogo={ require('../assets/images/teApuntasB.png') }/>
        <div className='destination-detail__container'>
          <div className='destination-detail__columns'>
            <div className='destination-detail__column'>

              <div className='description'>
                { this.renderTravelersMobile() }
                { this.renderDescriptionDestination() }
                { this.renderList() }
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
                <Avatar showName={ true }/>
                <Avatar showName={ true }/>
                <Avatar showName={ true }/>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  renderDescriptionDestination() {
    return (
      <div>
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
        <button className="button-detailVideo">Ver video</button>
      </div>
    );
  }

  renderTravelersMobile() {
    return (
      <div className='description__travelers show-mobile'>
        <button className="button-detailTravel">Ver fechas disponibles</button>
        <div className="description__flex">
          <p className="description__flex__title">Apuntados al viaje</p>
          <div className="description__flex description__flex--avatars">
            <Avatar image='https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_11_octobre_2011.2Fsteve.2F1766087-1-fre-FR.2Fsteve.2Ejpg/480x480/quality/80/steve-jobs-les-raisons-de-son-deces.jpg' />
            <Avatar image="/static/images/avatar/1.jpg" />
            <Avatar />
            <Avatar />
            <Avatar />
           </div>
        </div>
      </div>
    );
  }

  renderList() {
    return (
      <div>
        <div className='description__list'>
          <h4 className='description__list__title'>Incluye</h4>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
        </div>
        <div className='description__list'>
          <h4 className='description__list__title'>Incluye</h4>
          <div className='description__list__item'>
            <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
            <p className='item-description'>6 noches de alojamiento</p>
          </div>
        </div>
      </div>
    );
  }
}

DestinationDetail = connect(mapStateToProps)(DestinationDetail);

export default DestinationDetail;
