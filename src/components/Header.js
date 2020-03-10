import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/elements/avatar';

function Header(props){
  return (
    <section className='Header'>
      <div className='Header__container'>
        <Link to="/">
          <img className='Header__icon' src={ props.imageLogo } alt={ props.alt } title={ props.title } />
        </Link>
        { props.login ? <Avatar /> : null }
      </div>
    </section>
  )
}

Header.defaultProps = {
  title: 'Title',
  alt: 'Logo Header',
  imageLogo:'',
  login: false,
}

export default Header
