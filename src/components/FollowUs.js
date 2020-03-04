import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class FollowUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }

    this.handleOpenForm = this.handleOpenForm.bind(this);
  }

  handleOpenForm() {
    this.setState(state => ({
      showForm: true
    }));
  }

  render() {
    return (
      <div className='FollowUs'>
        <div className='FollowUs__container'>

          {
            (this.state.showForm) ?
            <div>
              <p className='FollowUs__container--title'>Me interesa</p>
              <p className='FollowUs__container--description'>
                Si te interesa viajar con nosotros déjanos tus datos
                y nos pondremos en contacto contigo.
              </p>
              <form className='FollowUs__container__Form' noValidate autoComplete="off">
                <TextField className='InputComponent' id='standard-basic' label='Nombre Completo' />
                <TextField className='InputComponent' id='standard-basic' label='Correo Electrónico' />
                <TextField className='InputComponent' id='standard-basic' label='Teléfono' />
                <TextField
                  className='TextAreaComponent'
                  id='outlined-multiline-static'
                  label='Por qué quieres ser parte de Te Apuntas?'
                  multiline
                  rows='4'
                  variant='outlined'
                />
              <Link className='Link' to="/SignIn">
                <Button className='btn--grey ' variant='outlined' color='primary' onClick={this.handleOpenForm}>
                  Enviar
                </Button>
              </Link>

              </form>

            </div>
            :
            <div>
              <p className='FollowUs__container--description'>
               Bienvenido a Te Apuntas, si has llegado sin invitación escríbenos y cuéntanos por qué quieres ser parte de esto para que podamos enviarte una invitación personalizada.
              </p>
              <Button className='btn--grey ' variant='outlined' color='primary' onClick={this.handleOpenForm}>
                Contáctanos
              </Button>

            </div>
          }


        </div>


      </div>
    )
  }
}

export default FollowUs
