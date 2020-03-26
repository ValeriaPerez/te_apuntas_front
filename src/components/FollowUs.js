import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import { submitContactanos } from '../redux/actions/home';

const mapStateToProps = state => ({
  /* --- Home states --- */
  responseContactanos : state.Home.submitContactanos,
  loadingSubmitContactanos : state.Home.loadingSubmitContactanos,
});
class FollowUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: '',
      email: '',
      phone: '',
      comment: '',
    }

    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleSendInfo = this.handleSendInfo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { loadingSubmitContactanos, responseContactanos } = this.props;
    if (loadingSubmitContactanos && Object.keys(responseContactanos).length === 0 && !nextProps.loadingSubmitContactanos && Object.keys(nextProps.responseContactanos).length > 0 ){
      alert('Se envió el formulario');
      this.setState(state => ({
        showForm: false
      }));
    }
  }

  handleOpenForm() {
    this.setState(state => ({
      showForm: true
    }));
  }

  handleSendInfo(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = {
      nombre_completo: document.getElementById('inp-name').value,
      email: document.getElementById('inp-email').value,
      telefono: document.getElementById('inp-phone').value,
      razon: document.getElementById('inp-comment').value,
    }
    dispatch(submitContactanos(data));
  }

  resetForm() {
    document.getElementById('inp-name').value = '';
    document.getElementById('inp-email').value = ''
    document.getElementById('inp-phone').value = '';
    document.getElementById('inp-comment').value = '';
  }

  render() {
    console.log('home', this.props);
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
                <TextField
                  required
                  className='InputComponent'
                  id='inp-name'
                  label='Nombre Completo' />
                <TextField className='InputComponent' id='inp-email' label='Correo Electrónico' />
                <TextField className='InputComponent' id='inp-phone' label='Teléfono' />
                <TextField
                  className='TextAreaComponent'
                  id='inp-comment'
                  label='Por qué quieres ser parte de Te Apuntas?'
                  multiline
                  rows='4'
                  variant='outlined'
                />
                <button className='button-Home' variant='outlined' color='primary' onClick={this.handleSendInfo}>
                  Enviar
                </button>
              </form>

            </div>
            :
            <div>
              <button className='button-Home button-Home--contact' onClick={this.handleOpenForm}>
                Contáctanos
              </button>
            </div>
          }
        </div>


      </div>
    )
  }
}

FollowUs = connect(mapStateToProps)(FollowUs);

export default FollowUs;
