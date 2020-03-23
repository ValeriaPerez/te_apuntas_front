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
        <Link to="/Profile" tokenid={props.tokenid}>
          { props.login ? <Avatar /> : null }
        </Link>
      </div>
    </section>
  )
}

Header.defaultProps = {
  title: 'Title',
  alt: 'Logo Header',
  imageLogo:'',
  login: false,
  tokenid: 1,
}

export default Header
