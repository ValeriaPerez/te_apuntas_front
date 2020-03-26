import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';

import { retrieveProfileInfo } from '../redux/actions/profile';

const mapStateToProps = state => ({
  /* --- Profile states --- */
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

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(retrieveProfileInfo());
  }

  render() {
    return (
      <div className='Home'>
        <Header
          login={ true }
          title='Home'
          alt='Logo'
          imageLogo={ require('../assets/images/teApuntasB.png') }/>
          <UserInfo dataUser={this.props}/>
        <Footer />
      </div>
    );
  }
}

Profile = connect(mapStateToProps)(Profile);

export default Profile;
