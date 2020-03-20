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
              <div className='Footer__login__section'>
                <div>
                  <p>Home</p>
                  <p>Profile</p>
                </div>
                <p>© 2019 All rights reserved</p>
              </div>
              <div className='Footer__login__section'>
                <div>
                  <div>Home</div>
                  <div>Profile</div>
                  <div>Profile</div>
                </div>
                <p>POWERED  BY CONCEPTHAUS</p>
              </div>
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
