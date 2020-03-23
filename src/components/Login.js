import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import LinkedIn from "linkedin-login-for-react";
import InstagramLogin from 'react-instagram-login';
import { loginPost } from '../redux/actions/login';

const mapStateToProps = state => ({
  /* --- login states --- */
  loadingLogin: state.Login.loadingLoging,
  responseLogin: state.Login.dataLogin,
  errorLogin: state.Login.errorLogin,
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginTemp = this.loginTemp.bind(this);
  }

  callbackFacebook = (user, err) => {
    console.log(user)
    console.log(err)
  };

  callbackInstagram = (response) => {
    console.log(response);
  };

  callbackLinkedIn = (error, code, redirectUri) => {
     if (error) {
       // signin failed
     } else {
       // Obtain authorization token from linkedin api
       // see https://developer.linkedin.com/docs/oauth2 for more info
     }
   };

  loginTemp() {
    const { dispatch } = this.props;
    const dataLogin = {
      username: 'enrique',
      password: 'qwerty12345',
    }
    dispatch(loginPost(dataLogin));
  }

  componentWillReceiveProps(nextProps) {
    const {responseLogin, loadingLogin } = this.props;
    if( loadingLogin && !nextProps.loadingLogin && Object.keys(responseLogin).length === 0 && Object.keys(nextProps.responseLogin).length > 0) {
      window.location.pathname = '/HomeDestiny'
    }
  }

  render() {
    const { loadingLogin } = this.props;
    return (
      <div className='Login'>
        <div className='Login__container'>
          <p className='Login__container--Title'>Iniciar Sesión </p>
          { !loadingLogin ?
            <div className='Login__container__SocialMedia'>
              <SocialLogin
                provider='facebook'
                appId='796860273846597'
                key={'facebook'}
                callback={this.callbackFacebook}>
                <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                  F
                </Button>
              </SocialLogin>
              <div>
                <InstagramLogin
                  clientId="5fd2f11482844c5eba963747a5f34556"
                  onSuccess={this.callbackInstagram}
                  onFailure={this.callbackInstagram}
                  cssClass='SocialMediaEvent'>
                  <p>I</p>
                </InstagramLogin>
              </div>
              <div>
                <LinkedIn
                clientId="xxx"
                callback={this.callbackLinkedIn}
                className='SocialMediaEvent'
                text='L'>
                </LinkedIn>
              </div>
              <div className='SocialMediaEvent'>
                <Button
                  className='SocialMediaEvent'
                  variant='outlined'
                  color='primary'
                  onClick = { this.loginTemp }>
                  P
                </Button>
              </div>
            </div> :
            <h1>Esta cargando</h1>
          } 
        </div>
      </div> 
    )
  }
}


Login = connect(mapStateToProps)(Login);

export default Login
