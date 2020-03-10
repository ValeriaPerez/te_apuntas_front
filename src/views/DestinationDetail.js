import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import Avatar from '../components/elements/avatar';

export default class DestinationDetail extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header />
          <div>
            <Avatar />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
