import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../elements/avatar';
import cx from 'classnames';

function Header(props) {

  const { imageLogo, alt, title, isLogin, tokenid, isDestinyDetail, isProfile } = props;
  const headerClasses = cx({
    'header': true,
    'isLogged': isDestinyDetail || isProfile,
  });

  return (
    <div className={ headerClasses }>
      <div className='header__container'>
        <Link to="/">
          <img className='header__icon' src={ imageLogo } alt={ alt } title={ title } />
        </Link>
        <Link to="/Profile" tokenid={ tokenid }>
          { isLogin ? <Avatar image='https://picsum.photos/200/300'/> : null }
        </Link>
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: 'Logo te Apuntas',
  alt: 'Logo te Apuntas',
  imageLogo: '',
  isLogin: false,
  tokenid: 1,
  isProfile: false,
  isDestinyDetail: false,
}

export default Header
