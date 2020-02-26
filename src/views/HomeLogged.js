import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Modal from '../components/Modal';

export default class HomeLogged extends Component {

  // - - - - - Declare Initial State for this.props. - - - - -
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <Modal />
        <Header />
        <section className='Body'>
          <div className='Body__Columns'>
            <FollowUs />
          </div>
        </section>
      </div>
    )
  }

}
