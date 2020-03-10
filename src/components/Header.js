import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <section className='Header'>
      <div className='Header__container'>
        <Link to="/">
          <img className='Header__icon' src={ props.imageLogo } alt={ props.alt } title={ props.title } />
        </Link>
        {
        //<div className="HeaderGroup-Links">
          //<Link to="/"></Link>
        //</div>
        }
      </div>
    </section>
  )
}

Header.defaultProps = {
  title: 'Title',
  alt: 'Logo Header',
  imageLogo:'',
}

export default Header
