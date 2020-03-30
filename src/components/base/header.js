import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import cx from 'classnames';

function Header(props) {

  const headerClasses = cx({
    'header': true,
    'isLogged': true,
  });

  return (
    <div className={ headerClasses }>
      <div className='header__container'>
        <Link to="/">
          <img className='header__icon' src={ props.imageLogo } alt={ props.alt } title={ props.title } />
        </Link>
        <Link to="/Profile" tokenid={props.tokenid}>
          { props.login ? <Avatar image='https://picsum.photos/200/300'/> : null }
        </Link>
      </div>
    </div>
  );
}


Header.defaultProps = {
  title: 'header',
  alt: 'Logo Header',
  imageLogo:'',
  login: false,
  tokenid: 1,
  'isTransparent': false,
  'homeDestiny': false,
}

export default Header
