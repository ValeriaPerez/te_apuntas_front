import React, { Component } from 'react';
import Avatar from '../elements/avatar';

import ModalProfile from '../modal/modal-profile';

class Travelers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    const  { open } = this.state;
    const { optionSelected, maxUsers } = this.props;
    const users = optionSelected ? optionSelected.apuntados : [] ;
    return (
      <div className='travelers'>
        <div className='travelers__container'>
    <h4 className='travelers__title'>Apuntados al viaje <span className='travelers__counter'><strong>{users.length} /</strong> {maxUsers}</span></h4>
          <p className='travelers__date'>{optionSelected ? `${optionSelected.inicio} - ${optionSelected.termino}`: ''}</p>
          <div className='travelers__list'>
            { users.length > 0 ? this.renderTravelers(users) : null }
          </div>
          { users.length > 0 ?
            <ModalProfile 
              open={ open }
              name={ users[0].name }
              handleClose={ () => this.getProfileModal() } /> : null }
        </div>
      </div>
    );
  }

  renderTravelers(users) {
    return users.map((user, index) => {
      return (
        <Avatar 
          onClick={ (e) => this.getProfileModal(user) }
          key={ index }
          showName={ true }
          image={ user.image === '' ? '?' : user.foto }
          name={ user.name === '' ? '?' : `${user.nombres} ${user.paterno}` } />
      );
    });
  }

  getProfileModal(e) {
    this.setState(state => ({
     open: !this.state.open
    }));
  }
}

export default Travelers;
