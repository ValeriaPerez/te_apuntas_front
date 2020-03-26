import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Modal from '../components/Modal';
import Destination from '../components/Destination';
import Slider from '../components/SliderImage';
import Loader from '../components/elements/loader';

import { retrieveDestinyInfo } from '../redux/actions/destination';

const mapStateToProps = state => ({
  /* --- Home states --- */
  destinyInfo : state.Destination.destinyInfo,
  loadingDestinyInfo : state.Destination.loadingDestinyInfo,
  imagesDestiny: state.Destination.imagesDestiny,
  indexPage: state.Destination.indexPage,
  isLogin : state.Login.isLogin,
});

class HomeDestiny extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      showBullets: false,
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
      width: window.innerWidth
    });
  };

  render() {
    const { destinyInfo, imagesDestiny, indexPage, loadingDestinyInfo, isLogin } = this.props;
    return (
      <div className='home-destiny'>
        <div className='home-destiny__background-image'>
         { loadingDestinyInfo ? <Loader /> : 
            <Slider
              width={this.state.width}
              height={this.state.height}
              images={imagesDestiny.length > 0 && indexPage !== null ? imagesDestiny[indexPage] : []}
              showBullets={this.state.showBullets}
            />
         } 
          <Header
            title='Home'
            alt='Logo'
            login={ isLogin }
            isTransparent={ true }
            homeDestiny={ true }
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          {}
          <section className='home-destiny__body'>
            <Modal />
            <div className='home-destiny__columns welcomeColumns'>
              <Destination destinyInfo={indexPage !== null ? destinyInfo[indexPage] : null}/>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

HomeDestiny = connect(mapStateToProps)(HomeDestiny);

export default HomeDestiny;
