import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs'

export default class Home extends Component {

  // - - - - - Declare Initial State for this.props. - - - - -
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <section className='Home__menu'>
          <Header />
        </section>
        <section className='Home__body'>
          <div className='Home__bodyColumns'>
            <FollowUs />
          </div>
          <div className='Home__bodyColumns'>
            <Quotes />
          </div>
        </section>
        <footer>
          <p>Iniciar Session</p>
        </footer>
      </div>
    );
  }


}
