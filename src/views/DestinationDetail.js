import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/base/header';
import Footer from '../components/base/footer';
import Avatar from '../components/elements/avatar';
import SharedButtons from '../components/elements/shared';
import Slider from '../components/SliderImage';
import Reservation from '../components/destination-detail/reservation';

import ModalPayment from '../components/modal/modal-payment';

const mapStateToProps = state => ({
  /* --- Home states --- */
  isLogin : state.Login.isLogin,
  destinyInfo : state.Destination.destinyInfo,
  indexPage: state.Destination.indexPage,
});

class DestinationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 500,
      width: 0,
      showBullets: false,
      openModalPayment: false
    };
    window.addEventListener("resize", this.update);
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
    const { destinyInfo, indexPage, isLogin } = this.props;
    const destiny = destinyInfo ? destinyInfo[indexPage ? indexPage : 0] : null;
    const images = destiny ? destiny.imagenes.map(image => {
      return {'url': image.imagen }
    }) : [];
    const incluye = destiny ? destiny.cat_incluye.filter(obj => {
      return obj.activo;
    }) : [];
    const noIncluye = destiny ? destiny.cat_incluye.filter(obj => {
      return !obj.activo;
    }) : [];
    return (
      <div className='destination-detail'>
        <Header isDestinyDetail={ true } isLogin={ !isLogin } imageLogo={ require('../assets/images/teApuntasB.png') }/>
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
                { this.renderDescriptionDestination(destiny) }
                { this.renderList(incluye, noIncluye) }
              </div>

              <div className='location'>
                <div className='location__container'>
                  <h4 className='location__title'>Ubicacion</h4>
                  { this.renderDestinationLocationMap() }
                </div>
              </div>

            </div>
            <div className='destination-detail__column'>
              <Reservation destiny={destiny}/>
            </div>
          </div>
        </div>
        <Footer section='destination-detail'/>
        <SharedButtons isMobile={ true } />
      </div>
    );
  }

  renderDescriptionDestination(destiny) {
    return (
      <div>
        <h4 className='description__title'>{`${destiny.ciudad} ${destiny.pais}`} <span className='description__span'>{destiny.precio} € </span></h4>
        <p className='description__text'>
          { destiny.descripcion }
        </p>
        <h4 className='description__title'>Grandes momentos</h4>
        <p className='description__text'>
          { destiny.grandes_momentos }
        </p>
        <h4 className='description__title'>Notas sobre el viaje</h4>
        <p className='description__text'>
          { destiny.notas }
        </p>
        <button className="button-detailVideo">Ver video</button>
      </div>
    );
  }

  renderTravelersMobile() {
    const { openModalPayment } = this.state; 
    return (
      <div className='description__travelers show-mobile'>
        <button className="button-detailTravel" onClick={ () => this.handleOpenModal() }>Ver fechas disponibles</button>
        <div className="description__flex">
          <p className="description__flex__title">Apuntados al viaje</p>
          <div className="description__flex description__flex--avatars">
            <Avatar image='https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_11_octobre_2011.2Fsteve.2F1766087-1-fre-FR.2Fsteve.2Ejpg/480x480/quality/80/steve-jobs-les-raisons-de-son-deces.jpg' />
            <Avatar image="/static/images/avatar/1.jpg" />
            <Avatar />
            <Avatar image="/static/images/avatar/1.jpg" />
            <Avatar image="/static/images/avatar/1.jpg" />
           </div>
        </div>
        <ModalPayment 
          open={ openModalPayment }
          handleClose={ () => this.handleOpenModal() } />
      </div>
    );
  }

  renderList(incluye, noIncluye) {
    return (
      <div>
        <div className='description__list'>
          <h4 className='description__list__title'>Incluye</h4>
          {
            incluye.map(dato => {
              return (
                <div className='description__list__item'>
                  <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
                  <p className='item-description'>{dato.descripcion}</p>
                </div>)
            })
          }
        </div>
        <div className='description__list'>
          <h4 className='description__list__title'>No incluye</h4>
          {
            noIncluye.map(dato => {
              return (
                <div className='description__list__item'>
                  <img src={ require('../assets/images/icon-default.png') } alt='services include' className='icon' />
                  <p className='item-description'>{dato.descripcion}</p>
                </div>)
            })
          }
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

  handleOpenModal(){
    console.log('entre');
    this.setState(state => ({
     openModalPayment: !this.state.openModalPayment
    }));
  }
}

DestinationDetail = connect(mapStateToProps)(DestinationDetail);

export default DestinationDetail;
