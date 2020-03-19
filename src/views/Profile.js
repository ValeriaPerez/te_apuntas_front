import React, { Component } from "react";

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import UserInfo from '../components/UserInfo'

import { retrieveProfileInfo } from '../redux/actions/profile';

const mapStateToProps = state => ({
  /* --- Home states --- */
  profileInfo : state.Profile.profileInfo,
  loadingProfileInfo : state.Profile.loadingProfileInfo,
});

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      showBullets: false
    };
  }

  doRequest();

  render() {

    console.log(this.props);

    return (
      <div className='Home'>
        <Header
          title='Home'
          alt='Logo'
          imageLogo={ require('../assets/images/teApuntas.png') }/>
        <section className='Body'>
          <div className='Body__Columns LoginView'>
            <UserInfo />
          </div>
        </section>
        <Footer isLogged={true}/>
      </div>
    );
  }

}

export default Profile;
