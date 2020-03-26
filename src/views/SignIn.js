import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Login from '../components/Login';

export default class Home extends Component {
  render() {
    return (
      <div className='SignIn'>
        <div className='BG-img'>
          <Header
            title='Home'
            alt='Logo'
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          <section className='SignIn-container'>
            <div className='Body__Columns LoginView'>
              <Login />
            </div>
          </section>
        </div>
      </div>
    );
  }

}
