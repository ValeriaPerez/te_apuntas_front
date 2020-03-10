import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import FollowUs from '../components/FollowUs';
import Footer from '../components/Footer';

import { retrieveImagesHome } from '../redux/actions/home';

const mapStateToProps = state => ({
  /* --- Home states --- */
  imagesHome : state.Home.imagesHome,
  loadingImagesHome : state.Home.loadingImagesHome,
});

class Home extends Component {

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(retrieveImagesHome());
    }

  render() {
    // const { imagesHome, loadingImagesHome } = this.props;
    // console.log('imagesHome', imagesHome);
    // console.log('loading', loadingImagesHome);
    return (
      <div className='Home'>
        <div className='BG-img'>
          <Header />
          <section className='Body'>
            <div className='Body__Columns'>
              <FollowUs />
            </div>
            <div className='Body__Columns'>
              <Quotes />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;
