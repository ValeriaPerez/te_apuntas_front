import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Modal from '../components/Modal';
import Destination from '../components/Destination';

export default class HomeLogged extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header />
          <section className='Body'>
            <Modal />
            <div className='Body__Columns welcomeColumns'>
              <Destination />
            </div>
          </section>
        </div>
      </div>
    )
  }

}
