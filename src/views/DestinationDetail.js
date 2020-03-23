import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import Avatar from '../components/elements/avatar';
import SharedButtons from '../components/elements/shared';
import Slider from '../components/SliderImage';
import Reservation from '../components/destination-detail/reservation';

import { retrieveDestinyInfo } from '../redux/actions/destination';

const mapStateToProps = state => ({
  /* --- Home states --- */
  destinyInfo : state.Destination.destinyInfo,
  loadingDestinyInfo : state.Destination.loadingDestinyInfo,
});

class DestinationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 500,
      width: 0,
      showBullets: false
    };
    window.addEventListener("resize", this.update);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(retrieveDestinyInfo());
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    const { destinyInfo } = this.props;
    const images = [
      'https://img.freepik.com/foto-gratis/horizonte-ciudad-toronto-noche-ontario-canada_131985-286.jpg?size=626&ext=jpg',
      'https://img.freepik.com/foto-gratis/horizonte-ciudad-toronto-noche-ontario-canada_131985-286.jpg?size=626&ext=jpg,'
    ];

    console.log('destinyInfo', destinyInfo );
    return (
      <div className='destination-detail'>
        <Header
          login={ true }
          tokenId='1'
          title='Volver a Home'
          alt='Logo Header'
          imageLogo={ require('../assets/images/teApuntasB.png') }/>
        <Slider
          width={this.state.width}
          height='60vh'
          images={images}
          showBullets={this.state.showBullets}
           />
        <div className='destination-detail__container'>
          <div className='destination-detail__columns'>
            <div className='destination-detail__column'>

              <div className='description'>
                { this.renderTravelersMobile() }
                { this.renderDescriptionDestination() }
                { this.renderList() }
              </div>

              <div className='location'>
                <div className='location__container'>
                  <h4 className='location__title'>Ubicacion</h4>
                  { this.renderDestinationLocationMap() }
                </div>
              </div>

            </div>
            <div className='destination-detail__column'>

              <Reservation />

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
        <Footer section='destination-detail'/>
        <SharedButtons />
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
        <a className='description__list__link' href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' filename='Plan_de_viaje' title='file Plan_de_viaje' download>Plan de viaje</a>
        <button className='button-travelRequest'>Solicitar viaje privado</button>
      </div>
    );
  }

  renderDestinationLocationMap() {
    return (
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41281391.04844523!2d-130.0900153359974!3d50.83827347786808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2zQ2FuYWTDoQ!5e0!3m2!1ses!2smx!4v1584718605709!5m2!1ses!2smx" 
        className='location__map'
        frameborder='0'
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
        title='destination location'
      />
    );
  }
}

DestinationDetail = connect(mapStateToProps)(DestinationDetail);

export default DestinationDetail;
