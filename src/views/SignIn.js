import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Login from '../components/Login';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header />
          <section className='Body'>
            <div className='Body__Columns LoginView'>
              <Login />
            </div>
          </section>
        </div>
      </div>
    );
  }

}
