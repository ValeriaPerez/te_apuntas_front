import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';

function Header(props){
  if (props.login) {
    return (
      <section className='Header isLogged'>
        <div className='Header__container'>
          <Link to="/">
            <img className='Header__icon' src={ props.imageLogo } alt={ props.alt } title={ props.title } />
          </Link>
          <Link to="/Profile" tokenid={props.tokenid}>
            { props.login ? <Avatar image='https://picsum.photos/200/300'/> : null }
          </Link>
        </div>
      </section>
    )
  } else {
    return (
      <section className='Header'>
        <div className='Header__container'>
          <Link to="/">
            <img className='Header__icon' src={ props.imageLogo } alt={ props.alt } title={ props.title } />
          </Link>
          <Link to="/Profile" tokenid={props.tokenid}>
            {/* TODO: Validar bien la propiedaad login y modificaar clase dependiendo el location */}
            { props.login || props.homeDestiny ? <Avatar image='https://picsum.photos/200/300' /> : null }
          </Link>
        </div>
      </section>
    )
  }
}

Header.defaultProps = {
  title: 'Title',
  alt: 'Logo Header',
  imageLogo:'',
  login: false,
  tokenid: 1,
  'isTransparent': false,
  'homeDestiny': false,
}

export default Header
