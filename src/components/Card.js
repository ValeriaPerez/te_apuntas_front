import React from 'react';
import Avatar from '../components/elements/avatar';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
    };
  }

  render() {
    return(
      <div className='Card'>
        <div className='Info'>
          <Avatar cssClass='AvatarL'/>
          <p className='editImage'>Cambiar foto</p>
          <p className='aliasText'>APP02</p>
        </div>
        <div className='userAbout'>
          <p className='editAbout'>Editar semblanza</p>
          <p className='editText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Et dolor, met, do met, sed adipisi-cing, lorem ipsum.</p>
        </div>
      </div>
    );
  }

}

export default Card
