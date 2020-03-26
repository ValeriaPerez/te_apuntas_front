import React, { Component } from 'react';
import Avatar from '../elements/avatar';

import ModalProfile from '../modal/modal-profile';

class Travelers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      users: [
        {
          'name' : 'Valeria Pérez',
          'image' : 'https://picsum.photos/200/300'
        },
        {
          'name' : '',
          'image' : ''
        },
        {
          'name' : 'Andres',
          'image' : 'https://i.picsum.photos/id/237/200/300.jpg'
        },
        {
          'name' : 'Amadeo Jaime Terreros',
          'image' : 'https://i.picsum.photos/id/866/200/300.jpg'
        },
        {
          'name' : 'Enrique Duran',
          'image' : 'https://i.picsum.photos/id/237/200/300.jpg'
        },
        {
          'name' : 'Valeria Pérez',
          'image' : 'https://picsum.photos/200/300'
        },
        {
          'name' : 'Steve',
          'image' : 'https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_11_octobre_2011.2Fsteve.2F1766087-1-fre-FR.2Fsteve.2Ejpg/480x480/quality/80/steve-jobs-les-raisons-de-son-deces.jpg'
        },
        {
          'name' : 'Andres',
          'image' : 'https://i.picsum.photos/id/237/200/300.jpg'
        },
        {
          'name' : '',
          'image' : ''
        },
        {
          'name' : 'Enrique Duran',
          'image' : 'https://i.picsum.photos/id/237/200/300.jpg'
        }
      ],
    }
  }

  render() {
    const  { open, users } = this.state;
    return (
      <div className='travelers'>
        <div className='travelers__container'>
          <h4 className='travelers__title'>Apuntados al viaje <span className='travelers__counter'><strong>7 /</strong> 10</span></h4>
          <p className='travelers__date'>26/11/19 - 30/11/19</p>
          <div className='travelers__list'>
            { this.renderTravelers() }
          </div>
          <ModalProfile 
            open={ open }
            name={ users[0].name }
            handleClose={ () => this.getProfileModal() } />
        </div>
      </div>
    );
  }

  renderTravelers() {
    return this.state.users.map((date, index) => {
      return (
        <Avatar 
          onClick={ (e) => this.getProfileModal(date) }
          key={ index }
          showName={ true }
          image={ date.image === '' ? '?' : date.image }
          name={ date.name === '' ? '?' : date.name } />
      );
    });
  }

  getProfileModal(e) {
    console.log('event', e);
    this.setState(state => ({
     open: !this.state.open
    }));
  }
}

export default Travelers;
