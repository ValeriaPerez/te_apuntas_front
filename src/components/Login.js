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
        <p className='Login__Title'>Iniciar Sesión </p>
        <div className='Login__SocialMedia'>
          <Button className='Login__SocialMedia--btn' variant='outlined' color='primary'>
            F
          </Button>
          <Button className='Login__SocialMedia--btn' variant='outlined' color='primary'>
            I
          </Button>
          <Button className='Login__SocialMedia--btn' variant='outlined' color='primary'>
            L
          </Button>
          <Button className='Login__SocialMedia--btn' variant='outlined' color='primary'>
            P
          </Button>
        </div>
      </div>
    )
  }
}

export default Login
