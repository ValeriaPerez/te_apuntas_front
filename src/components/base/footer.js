import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
  render() {
    const section = window.location.pathname;
    return this.renderFooter(section);
  }

  renderFooter(section) {
    switch (section) {
      default:
        return this.getFooterHome();

      case '/':
        return this.getFooterHome();

      case '/Travel':
        return this.getFooterDestinationDetail();

      case '/Profile':
        return this.getFooterProfile();

    }
  }

  getFooterHome() {
    return (
      <footer className='Footer'>
        <div className='Footer__container'>
          <div className='Footer__login'>
            <Link className='Footer__link' to="/SignIn">
              <p className='Footer__login--text'>¿Ya eres usuario? <span>Inicia Sesión</span></p>
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  getFooterProfile() {
    return (
      <footer className='Footer isLogged'>
        <div className='Footer__container'>
          <div className='Footer__login'>
            <div className='Footer__login__section'>
              <div>
                <p>Home</p>
                <p>Profile</p>
              </div>
              <p>© 2019 All rights reserved</p>
            </div>
            <div className='Footer__login__section'>
              <div>
                <div>Home</div>
                <div>Profile</div>
                <div>Profile</div>
              </div>
              <p>POWERED  BY CONCEPTHAUS</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  getFooterDestinationDetail() {
    return (
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__content'>
            <div className='footer__content show-desktop'>
              <Link className='footer__text footer__text--margin-right' to="/">Home</Link>
              <Link className='footer__text' to="/Profile">Profile</Link>
            </div>
            <div className='footer__icons'>
              <a title='social' className='footer__text footer__text--margin-right' href='/'>Twitter</a>
              <a title='social' className='footer__text footer__text--margin-right' href='/'>Instagram</a>
              <a title='social' className='footer__text' href='/'>Facebook</a>
            </div>
          </div>
          <div className='footer__content'>
            <p className='footer__text'>© 2019 All rights reserved</p>
            <p className='footer__text'>POWERED  BY CONCEPTHAUS</p>
          </div>
        </div>
      </footer>
    );
  }

}

export default FooterComponent;
