import React from 'react';
import Avatar from '../components/elements/avatar';

class UserInfo extends React.Component {

  render() {
    return (
      <section className='UserData'>
        <div className='UserData__container'>
          <div className='UserData__container--Card'>
            <div className='userInfo'>
              <Avatar cssClass='AvatarL'/>
              <p className='editImage'>Cambiar foto</p>
              <p className='aliasText'>APP02</p>
            </div>
            <div className='userAbout'>
              <p className='editAbout'>Editar semblanza</p>
              <p className='editText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Et dolor, met, do met, sed adipisi-cing, lorem ipsum.</p>
            </div>
          </div>
          <div className='UserData__container--DataUser'>
            <h1 className='DataUser__title'>Hola, Lolita Davis</h1>
            <div>
              <p>Se registro en 2018</p>
              <p>Editar perfil</p>
            </div>
            <div><p>Lols</p></div>
            <div><p>Lols</p></div>
            <div><p>Lols</p></div>
            <div><p>Lols</p></div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserInfo
