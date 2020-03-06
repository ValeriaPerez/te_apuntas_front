import React from 'react';
import { Link, ReactDOM } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { OldSocialLogin as SocialLogin } from 'react-social-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  SocialLogin = (user, err) => {
    console.log(user)
    console.log(err)
  }

  render() {
    return (
      <div className='Login'>
        <div className='Login__container'>
          <p className='Login__container--Title'>Iniciar Sesión </p>
          <div className='Login__container__SocialMedia'>
            <SocialLogin
              provider='facebook'
              appId='796860273846597'
              callback={SocialLogin}>
              <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                F
              </Button>
            </SocialLogin>
            <SocialLogin
              provider='instagram'
              appId=''
              callback={SocialLogin}>
              <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                I
              </Button>
            </SocialLogin>
            <SocialLogin
              provider='linkedin'
              appId='796860273846597'
              callback={SocialLogin}>
              <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                L
              </Button>
            </SocialLogin>
            <div className='SocialMediaEvent'>
              <Button className='SocialMediaEvent' variant='outlined' color='primary'>
                L
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
