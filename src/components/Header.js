import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <section className='Header'>
        <div className='Header__container'>
          <Link to="/">
            <img className='Header__icon' src={require('../assets/images/teApuntas.png')} alt="Logo" />
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
}

export default Header
