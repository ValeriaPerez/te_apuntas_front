import React from 'react';

function MobileNotification(props) {
  return (
    <div className='notification'>
      <div className='notification__container'>
        <p className='notification__text'>Selecciona la fecha que desees y da clic en “continuar” para reservar</p>
        <button className='notification__button'>Continuar</button>
      </div>
    </div>
  );
}

export default MobileNotification
