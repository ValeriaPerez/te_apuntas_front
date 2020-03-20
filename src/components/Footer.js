/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({

});

class FooterComponent extends Component {
  render() {
    const section = window.location.pathname;
    return this.renderFooter(section);
  }

  renderFooter(section) {
    switch (section) {
      case '/':
        return this.getFooterHome();
        break;
      case '/Travel':
        return this.getFooterDestinationDetail();
        break;
      case '/Profile':
        return this.getFooterDestinationDetail();
        break;
    }
  }

  getFooterHome() {
    return (
      <footer className='Footer'>
        <div className='Footer__container'>
          <div className='Footer__login'>
            <Link className='Link' to="/SignIn">
              <p className='Footer__login--text'>¿Ya eres usuario?<button>Iniciar Sesion</button></p>
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
      <footer className='Footer isLogged'>
        <h1>New footer!!</h1>
      </footer>
    );
  }

}

FooterComponent = connect(mapStateToProps)(FooterComponent);

export default FooterComponent;
