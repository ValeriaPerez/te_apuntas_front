import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Modal from '../components/Modal';
import Destination from '../components/Destination';

export default class HomeLogged extends Component {

  // - - - - - Declare Initial State for this.props. - - - - -
  constructor(props) {
    super(props);
  }

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
