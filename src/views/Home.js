import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Footer from '../components/Footer';
import Slider from '../components/SliderImage';

import { retrieveImagesHome } from '../redux/actions/home';

const mapStateToProps = state => ({
  /* --- Home states --- */
  imagesHome : state.Home.imagesHome,
  loadingImagesHome : state.Home.loadingImagesHome,
});

class Home extends Component {
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

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(retrieveImagesHome());
    }

  render() {
    const { imagesHome } = this.props;
    const images = imagesHome.map(image => {
      return {'url': image.imagen};
    })
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header
            title='Home'
            alt='Logo'
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          <Slider
              width={this.state.width}
              height={this.state.height}
              images={images}
              showBullets={this.state.showBullets}
            />
          <section className='Body'>
            <div className='Body__Columns'>
              <FollowUs />
            </div>
            <div className='Body__Columns'>
              <Quotes />
            </div>
          </section>
          <Footer isLogged='false'/>
        </div>
      </div>
    );
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;
