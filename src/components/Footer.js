import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
  const isLoggedIn = props.isLogged;
  return (
    <div>
      {isLoggedIn === true ? (
        <footer className='Footer isLogged'>
          <div className='Footer__container'>
            <div className='Footer__login'>
              <Link className='Link' to="/SignIn">
                <p className='Footer__login--text'>¿Ya eres usuario?<button>Iniciar Sesion</button></p>
              </Link>
            </div>
          </div>
        </footer>
      ) : (
        <footer className='Footer'>
          <div className='Footer__container'>
            <div className='Footer__login'>
              <Link className='Link' to="/SignIn">
                <p className='Footer__login--text'>¿Ya eres usuario?<button>Iniciar Sesion</button></p>
              </Link>
            </div>
          </div>
        </footer>

      )}
    </div>

  )

}

export default Footer
