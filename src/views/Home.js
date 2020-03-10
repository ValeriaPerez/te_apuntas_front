import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header 
            title='Home'
            alt='Logo'
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          <section className='Body'>
            <div className='Body__Columns'>
              <FollowUs />
            </div>
            <div className='Body__Columns'>
              <Quotes />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
