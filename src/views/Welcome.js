import React, { Component } from "react";

// Components
import Header from '../components/Header';
import Modal from '../components/Modal';
import Destination from '../components/Destination';
import Slider from '../components/SliderImage';

export default class HomeLogged extends Component {

  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
      showBullets: false
    };
    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Slider
            width={this.state.width}
            height={this.state.height}
            showBullets={this.state.showBullets} />
          <Header
            title='Home'
            alt='Logo'
            imageLogo={ require('../assets/images/teApuntas.png') }/>
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
