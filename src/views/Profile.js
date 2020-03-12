import React, { Component } from "react";

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import UserInfo from '../components/UserInfo'

export default class Profile extends Component {
  render() {
    return (
      <div className='Home'>
        <Header
          title='Home'
          alt='Logo'
          imageLogo={ require('../assets/images/teApuntas.png') }/>
        <section className='Body'>
          <div className='Body__Columns LoginView'>
            <UserInfo />
          </div>
        </section>
        <Footer isLogged={true}/>
      </div>
    );
  }

}
