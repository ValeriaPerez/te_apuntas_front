import React from 'react';
import { Button } from '@material-ui/core';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import LinkedIn from "linkedin-login-for-react";
import InstagramLogin from 'react-instagram-login';

class Login extends React.Component {

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

  render() {
    return (
      <div className='Login'>
        <div className='Login__container'>
          <p className='Login__container--Title'>Iniciar Sesión </p>
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
              <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                P
              </Button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Login
