import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/base/header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Footer from '../components/base/footer';
import Slider from '../components/SliderImage';
import Loader from '../components/elements/loader';

import { retrieveImagesHome } from '../redux/actions/home';

const mapStateToProps = state => ({
  /* --- Home states --- */
  imagesHome : state.Home.imagesHome,
  loadingImagesHome : state.Home.loadingImagesHome,
  isLoading: state.Login.isLoading,
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
    const widthPage = this.state.width;
    const { imagesHome, isLoading, loadingImagesHome } = this.props;
    const images = imagesHome.map(image => {
      return {'url': image.imagen};
    })

    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header
            title='Home'
            alt='Logo'
            login={ false }
            isLoading={ isLoading }
            imageLogo={ require('../assets/images/teApuntas.png') }/>
          { !loadingImagesHome?
            <Slider
              width={this.state.width}
              height={this.state.height}
              images={images}
              showBullets={this.state.showBullets}
              isLoading={isLoading}
            /> : <Loader />
          }
          { widthPage > 800 ?
            <section className='Body BodyR'>
              <div className='Body__Columns'>
                <p className='WelcomeText'>
                 Bienvenido a Te Apuntas, si has llegado sin invitación escríbenos y cuéntanos por qué quieres ser parte de esto para que podamos enviarte una invitación personalizada.
                </p>
                { isLoading ? null : <FollowUs />}
              </div>
              <div className='Body__Columns'>
                <Quotes />
              </div>
            </section>
            : <section className='Body BodyR'>
              <div className='HomeContainer'>
                <p className='WelcomeText'>
                 Bienvenido a Te Apuntas, si has llegado sin invitación escríbenos y cuéntanos por qué quieres ser parte de esto para que podamos enviarte una invitación personalizada.
                </p>
                <Quotes />
                { isLoading ? null : <FollowUs />}
              </div>
            </section>}

          <Footer />
        </div>
      </div>
    );
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;
