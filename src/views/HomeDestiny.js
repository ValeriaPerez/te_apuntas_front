import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Modal from '../components/Modal';
import Destination from '../components/Destination';
import Slider from '../components/SliderImage';

import { retrieveDestinyInfo } from '../redux/actions/destination';

const mapStateToProps = state => ({
  /* --- Home states --- */
  destinyInfo : state.Destination.destinyInfo,
  loadingDestinyInfo : state.Destination.loadingDestinyInfo,
});

class HomeDestiny extends Component {

  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
      showBullets: false
    };
    window.addEventListener("resize", this.update);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(retrieveDestinyInfo());
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  render() {
    console.log(this.props.destinyInfo);
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Slider
            width={this.state.width}
            height={this.state.height}
            showBullets={this.state.showBullets}
            destinyInfo={this.props.destinyInfo}
             />
          <Header
            title='Home'
            alt='Logo'
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          <section className='Body'>
            <Modal />
            <div className='Body__Columns welcomeColumns'>
              <Destination destinyInfo={this.props.destinyInfo}/>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

HomeDestiny = connect(mapStateToProps)(HomeDestiny);

export default HomeDestiny;
