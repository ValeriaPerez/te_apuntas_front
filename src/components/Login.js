import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Login'>
        <div className='Login__container'>
          <p className='Login__container--Title'>Iniciar Sesión </p>
          <div className='Login__container__SocialMedia'>
            <Button className='Login__container__SocialMedia--btn' variant='outlined' color='primary'>
              F
            </Button>
            <Button className='Login__container__SocialMedia--btn' variant='outlined' color='primary'>
              I
            </Button>
            <Button className='Login__container__SocialMedia--btn' variant='outlined' color='primary'>
              L
            </Button>
            <Button className='Login__container__SocialMedia--btn' variant='outlined' color='primary'>
              P
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
