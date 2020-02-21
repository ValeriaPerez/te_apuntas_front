import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

export default class Home extends Component {

  // - - - - - Declare Initial State for this.props. - - - - -
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <section className='Body'>
          <div className='Body__Columns LoginView'>
            <Login />
          </div>
        </section>
      </div>
    );
  }

}
