import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class FollowUs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='FollowUs'>
        <div className='FollowUs__container'>
          <p className='FollowUs__container--quotes'>
           “Esquiar entre bosques vírgenes
            rodeado de personas que viven la
            experiencia al límite ha sido épico.”
          </p>
          <Button className='FollowUs__container--btn' variant="outlined" color="primary">
            Contáctanos
          </Button>
        </div>


      </div>
    )
  }
}

export default FollowUs
