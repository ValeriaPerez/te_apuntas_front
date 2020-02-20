import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className='Footer'>
        <div className='Footer__login'>
          <p className='Footer__login--text'>¿Ya eres usuario?<button>Iniciar Sesion</button></p>
        </div>
      </footer>
    )
  }
}

export default Footer
