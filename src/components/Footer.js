import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='Footer__container'>
          <div className='Footer__login'>
            <Link className='Link' to="/SignIn">
              <p className='Footer__login--text'>¿Ya eres usuario?<button>Iniciar Sesion</button></p>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
